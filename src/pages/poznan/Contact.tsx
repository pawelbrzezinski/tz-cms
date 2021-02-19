import React from "react";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";
import Button from "../../components/Button";
import BubbleSection from "../../components/BubbleSection";
import MailButton from "../../components/MailButton";
import CallButton from "../../components/CallButton";

import "../../styles/contact_section.scss";

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
    fontFamily: "Poppins",
    "&.MuiInput-underline:after": {
      borderBottom: "1px solid #493fc7",
    },
    "&.MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "1px solid #493fc7",
    },
  },
});

const Contact = ({ className = "" }) => {
  const labelClasses = useLabelStyles();
  const inputClasses = useInputStyles();

  return (
    <div className={`contact_section ${className}`}>
      <BubbleSection
        h2="Umów się na wizytę"
        h5=" W celu umówienia terminu wizyty lekarskiej umów się online, zadzwoń lub napisz. Możesz wysłać e-mail bądź skorzystać z formularza kontaktowego."
        color="white"
      >
        <div className="container">
          <div className="columns_wrapper">
            <div className="form_section">
              <p className="form_title">Formularz kontaktowy</p>
              <h3>Napisz do nas</h3>
              <div className="form_wrapper">
                <TextField
                  fullWidth
                  InputLabelProps={{
                    classes: labelClasses,
                  }}
                  InputProps={{
                    classes: inputClasses,
                  }}
                  label="Imie i nazwisko"
                />
                <TextField
                  fullWidth
                  InputLabelProps={{
                    classes: labelClasses,
                  }}
                  InputProps={{
                    classes: inputClasses,
                  }}
                  label="Adres e-mail"
                />
                <TextField
                  fullWidth
                  InputLabelProps={{
                    classes: labelClasses,
                  }}
                  InputProps={{
                    classes: inputClasses,
                  }}
                  label="Numer telefonu"
                />
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  rowsMax={4}
                  InputLabelProps={{
                    classes: labelClasses,
                  }}
                  InputProps={{
                    classes: inputClasses,
                  }}
                  label="Wiadomość"
                />
                <Button>
                  <span>Wyślij wiadomość</span>
                </Button>
              </div>
            </div>
            <div className="contact_info_section">
              <div className="registration_wrappper">
                <h4>Rejestracja telefoniczna:</h4>
                <div className="registration_hours">
                  <p>
                    poniedziałek - wtorek: <strong>10:00⁃18:00</strong>
                  </p>
                  <p>
                    środa: <strong>12:00⁃20:00</strong>
                  </p>
                  <p>
                    czwartek - piątek: <strong>10:00⁃18:00</strong>
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
              <div className="operations_wrappper">
                <h4>Dział Operacyjny</h4>
                <div className="contact_person">Ida Słowicka</div>
                <div className="contact_info_wrapper">
                  <CallButton className="phone_button" type="dark" size="S" />
                  <span className="phone-number">+48 794 445 685</span>
                </div>
                <div className="contact_info_wrapper">
                  <MailButton className="mail_button" />
                  <span className="phone-number">
                    ida.slowicka@twojeznamiona.pl
                  </span>
                </div>
                <div className="contact_person_details">
                  <p>+48 794 445 685</p>

                  <p>ida.slowicka@twojeznamiona.pl</p>
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
