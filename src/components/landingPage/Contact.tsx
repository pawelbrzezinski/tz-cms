import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { makeStyles } from "@material-ui/core/styles";
import ky from "ky";

import Button from "../Button";
import BubbleSection from "../BubbleSection";
import MailButton from "../MailButton";
import CallButton from "../CallButton";

import CheckIcon from "../../img/ic_check.svg";
import "../../styles/contact_section.scss";
import { Link, navigate } from "gatsby";

const MuiPhoneNumber = React.lazy(() => import("material-ui-phone-number"));

const useLabelStyles = makeStyles({
  root: {
    color: "#454754",
    "&.Mui-focused": {
      color: "#493fc7",
    },
  },
});

const useInputStyles = makeStyles({
  root: {
    color: "#454754",
    fontFamily: "Poppins, Verdana, sans-serif",
    "&.MuiInput-underline:after": {
      borderBottom: "1px solid #493fc7",
    },
    "&.Mui-error:after": {
      borderBottom: "2px solid red",
    },
    "&.MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "1px solid #493fc7",
    },
  },
});

const FORM = {
  name: "",
  mail: "",
  phone: "",
  message: "",
};

const VALIDATION = {
  name: false,
  mail: false,
  phone: false,
  message: false,
};

const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone = "") => {
  return phone.length >= 15;
};

const Contact = ({ className = "", where = "", city = "" }) => {
  const isSSR = typeof window === "undefined";

  const labelClasses = useLabelStyles();
  const inputClasses = useInputStyles();

  const [isSent, setIsSent] = useState(false);
  const [form, setForm] = useState(FORM);
  const [validation, setValidation] = useState(VALIDATION);

  const validate = (form) => {
    const newValidation = {
      name: form.name === "",
      message: form.message === "",
      phone: !isValidPhone(form.phone),
      mail: !isValidEmail(form.mail),
    };
    setValidation({
      ...validation,
      ...newValidation,
    });

    return (
      !newValidation.name &&
      !newValidation.mail &&
      !newValidation.phone &&
      !newValidation.message
    );
  };

  const handleFormChange = (event) => {
    const newForm = {
      ...form,
      [event.target.id]: event.target.value,
    };
    setForm(newForm);
    setValidation({
      ...validation,
      [event.target.id]: false,
    });
  };

  const handlePhoneChange = (value) => {
    if (value) {
      const newForm = {
        ...form,
        phone: value,
      };
      setForm(newForm);
      setValidation({
        ...validation,
        phone: false,
      });
    }
  };

  const submitForm = () => {
    if (validate(form)) {
      const formData = new FormData();
      const defaultCity = !isSSR
        ? window.location.pathname
        : where || "brak informacji - błąd";

      formData.append("name", form.name);
      formData.append("surname", form.name);
      formData.append("mail", form.mail);
      formData.append("msg", form.message);
      formData.append("phone", form.phone);
      formData.append("miasto", city || defaultCity);

      ky.post("https://twojeznamiona.pl/sendmail.php", { body: formData });

      navigate("#thanks");

      setIsSent(true);
      setForm(FORM);
    }
  };

  return (
    <div className={`contact_section ${className}`}>
      <a className="anchor" id="kontakt"></a>
      <BubbleSection
        h2={`Umów się na wizytę ${where}`}
        h5=" W celu umówienia terminu wizyty lekarskiej umów się online, zadzwoń lub napisz. Możesz wysłać e-mail bądź skorzystać z formularza kontaktowego."
        color="white"
      >
        <div className="container">
          <div className="columns_wrapper">
            {isSent && (
              <div className="form_thanks" id="thanks">
                <img src={CheckIcon} alt="Dziękujemy za wiadomość" />
                <h3>Dziękujemy za wiadomość</h3>
                <div>
                  Odezwiemy się do ciebie najszybciej jak to tylko będzie
                  możliwe. Staramy się odpowiadać na wiadomości w ciagu 24
                  godzin.
                </div>
              </div>
            )}
            {!isSent && (
              <div className="form_section">
                <p className="form_title">Formularz kontaktowy</p>
                <h3>Napisz do nas</h3>
                <div className="form_wrapper">
                  <TextField
                    id="name"
                    value={form.name}
                    error={validation.name}
                    fullWidth
                    InputLabelProps={{
                      classes: labelClasses,
                    }}
                    InputProps={{
                      classes: inputClasses,
                    }}
                    label="Imie i nazwisko"
                    onChange={handleFormChange}
                  />
                  <TextField
                    id="mail"
                    value={form.mail}
                    error={validation.mail}
                    type="email"
                    fullWidth
                    InputLabelProps={{
                      classes: labelClasses,
                    }}
                    InputProps={{
                      classes: inputClasses,
                    }}
                    label="Adres e-mail"
                    onChange={handleFormChange}
                  />
                  <div className="contact-form-phone-wrapper">
                    {!isSSR && (
                      <React.Suspense fallback={<div />}>
                        <MuiPhoneNumber
                          id="phone"
                          value={form.phone}
                          error={validation.phone}
                          fullWidth
                          disableAreaCodes={true}
                          defaultCountry={"pl"}
                          disableDropdown={true}
                          InputLabelProps={{
                            classes: labelClasses,
                          }}
                          InputProps={{
                            classes: inputClasses,
                          }}
                          label="Numer telefonu"
                          onChange={handlePhoneChange}
                        />
                      </React.Suspense>
                    )}
                  </div>
                  <TextField
                    id="message"
                    value={form.message}
                    error={validation.message}
                    fullWidth
                    multiline
                    rows={4}
                    rowsMax={4}
                    InputLabelProps={{
                      classes: labelClasses,
                    }}
                    InputProps={{
                      classes: inputClasses,
                    }}
                    label="Wiadomość"
                    onChange={handleFormChange}
                  />
                  <Button onClick={submitForm}>
                    <span>Wyślij wiadomość</span>
                  </Button>
                  <p className="rodo">
                    Administratorem danych osobowych podanych w formularzu jest
                    Medify.me Sp. z o. o. Dane będą przetwarzane w celu
                    odpowiedzi na zapytanie użytkownika. Pełna informacja o
                    przetwarzaniu danych osobowych znajduje się{" "}
                    <Link to="/polityka">tutaj</Link>
                  </p>
                </div>
              </div>
            )}

            <div className="contact_info_section">
              <div className="online_registration_wrappper">
                <h3>Zarejestruj sie online</h3>
                <p>Szybko i łatwo! 24 h/dobę</p>
                <Button>
                  <AnchorLink href="#cennik" title="Umów się">
                    Umów się online
                  </AnchorLink>
                </Button>
              </div>
              <div className="registration_wrappper">
                <h3>Rejestracja telefoniczna:</h3>
                <div className="registration_hours">
                  <p>
                    poniedziałek - wtorek: <strong>9:00⁃19:00</strong>
                  </p>
                  <p>
                    środa: <strong>12:00⁃20:00</strong>
                  </p>
                  <p>
                    czwartek - piątek: <strong>9:00⁃19:00</strong>
                  </p>
                </div>
                <div className="contact_info_wrapper">
                  <CallButton className="phone_button" type="dark" size="S" />
                  <span className="phone-number">+48 781 445 685</span>
                </div>
                <div className="contact_info_wrapper">
                  <MailButton className="mail_button" />
                  <span className="phone-number">zbadamy@twojeznamiona.pl</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BubbleSection>
    </div>
  );
};

export default Contact;
