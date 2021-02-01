import React from "react";
import BubbleSection from "../../components/BubbleSection";
import ReviewCard from "./ReviewCard";

const Reviews = ({ className = "" }) => (
  <div className={className}>
    <BubbleSection
      introText="Opinie pacjentów"
      h2="Oni nam zaufali"
      color="yellow"
      reverse
    >
      <div className="container">
        <div className="cards">
          <ReviewCard author="Katarzyna K."
            city="Poznań">
            Skrupulatne i dokładne badanie wideodermatoskopowe. Polecam
            wszystkim, którzy szukają pomocy i "ludzkich" specjalistów.
          </ReviewCard>
          <ReviewCard
            author="Anna B."
            city="Warszawa"
          >
            Nikt nie ma tyle cierpliwości, by badać moje 213 znamion kilka razy
            w roku. Nikt nie ma tyle taktu, bym czuła się przy tym komfortowo.
            Dziękuję!
          </ReviewCard>
          <ReviewCard author="Dominik M."
            city="Wrocław">
            Otrzymałem wynik badania dermatoskopowego, jak również zrozumiały
            komentarz do wyniku histopatologicznego usuniętej zmiany.
          </ReviewCard>
        </div>
      </div>
    </BubbleSection>
  </div>
);

export default Reviews;
