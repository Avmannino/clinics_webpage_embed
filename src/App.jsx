import "./App.css";
import learnToSkateSpring from "./assets/learn-to-skate-spring.png";
import erikNatesImage from "./assets/erik-nates.png";
import kurtNicholsImage from "./assets/kurt-nichols.png";
import gretzkyImage from "./assets/gretzky.jpg";
import wingsLogo from "./assets/wings-logo.png";

const inHouseClinics = [
  {
    title: "Wings Arena | Learn To Skate & Learn to Play Programs",
    subtitle: "Spring Sessions",
    image: learnToSkateSpring,
    useSplitLayout: true,
    columns: [
      {
        heading: "LTP",
        details: [
          { label: "Dates", value: "03/14/26 - 06/13/26" },
          { label: "Time", value: "Mondays 3:40PM - 4:40PM" },
          { label: "", value: "Saturdays 12:20PM - 1:20PM" },
          { label: "Location", value: "Wings Arena" },
          { label: "Ages", value: "4 - 8 years old" },
        ],
        buttonText: "Register — Learn To Play",
        buttonUrl: "https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=8390&GroupID=3995937",
      },
      {
        heading: "LTS",
        details: [
          { label: "Dates", value: "03/14/26 - 06/13/26" },
          { label: "Time", value: "Mondays (Preschoolers) 1:20PM - 2:05PM" },
          { label: "", value: "Fridays 3:15PM - 4:00PM" },
          { label: "", value: "Saturdays 1:20PM - 2:05PM" },
          { label: "Location", value: "Wings Arena" },
          { label: "Ages", value: "4 - 8 years old" },
        ],
        buttonText: "Register — Learn to Skate",
        buttonUrl: "https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=8390&GroupID=3995941",
      },
    ],
  },
];

const partneredClinics = [
  {
    title: "Erik Nates Euro Hockey",
    image: erikNatesImage,
    splitTwoPrograms: true,
    leftProgram: {
      heading: "Summer Camp",
      details: [
        { label: "Dates", value: "Various" },
        { label: "Time", value: "Various" },
        { label: "Location", value: "Wings Arena" },
        { label: "Ages", value: "Various" },
      ],
      buttonText: "Register Here",
      buttonUrl: "https://nateshockey.com/connecticut-summer-camp/",
      buttonNote: "Scroll down to the Wings Arena section",
    },
    rightProgram: {
      heading: "Spring 3v3 League",
      details: [
        { label: "Dates", value: "04/06 - 05/28" },
        { label: "Time", value: "See registration for full schedule." },
        { label: "Location", value: "Wings Arena" },
        { label: "Ages", value: "Mites - Bantam" },
      ],
      buttonText: "Register Here",
      buttonUrl: "https://nateshockey.com/ct-schedule-2021-darien-ice/",
    },
  },
  {
    title: "Kurt Nichols Power Skating",
    image: kurtNicholsImage,
    redAccent: true,
    details: [
      { label: "Dates", value: "04/11/26 - 05/30/26" },
      { label: "Times", value: "Saturdays: 5:00PM - 6:20PM" },
      { label: "Location", value: "Wings Arena" },
      { label: "Ages", value: "Birth Years - 2012, 2013, 2014" },
    ],
    buttonText: "Register Here",
    buttonUrl: "https://kurtpowerskating.com/collections/spring/products/full-throttle-skating-mechanics-2014-2012",
  },
  {
    title: "Gretzky Hockey School",
    image: gretzkyImage,
    imageContain: true,
    details: [
      { label: "Dates", value: "08/10 - 08/14" },
      { label: "Time", value: "8:00 AM - 3:15 PM (Noon on Friday)" },
      { label: "Location", value: "Wings Arena" },
      { label: "Ages", value: "Various" },
    ],
    buttonText: "Register Here",
    buttonUrl: "https://gretzkyhockeyschool.com/collections/camps/products/connecticut?variant=46744103321775",
  },
];

function ImageFrame({ src, alt, contain = false }) {
  return (
    <div className={`imageFrame${contain ? " imageContain" : ""}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.classList.add("placeholderMode");
          }}
        />
      ) : null}
      <div className="placeholderText">Image Placeholder</div>
    </div>
  );
}

function InfoLines({ details, redAccent = false }) {
  return (
    <div className="infoLines">
      {details.map((item, index) => (
        <p
          key={`${item.label}-${item.value}-${index}`}
          className={`infoLine ${redAccent ? "redAccent" : ""}`}
        >
          {item.label ? <span className="infoLabel">{item.label}</span> : null}{" "}
          <span className="infoValue">{item.value}</span>
        </p>
      ))}
    </div>
  );
}

function ProgramButton({ text, url, red = false }) {
  const cls = `programButton ${red ? "redButton" : ""}`;
  if (url) {
    return (
      <a className={cls} href={url} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );
  }
  return (
    <button className={cls} type="button">
      {text}
    </button>
  );
}

function StandardCard({ item }) {
  return (
    <section className="clinicCard">
      <h3 className={`clinicTitle ${item.redAccent ? "redTitle" : ""}`}>
        {item.title}
      </h3>
      <div className="titleUnderline" />

      <div className="cardContent standardCardContent">
        <div className="posterColumn">
          <ImageFrame src={item.image} alt={item.title} contain={item.imageContain} />
        </div>

        <div className="detailsColumn">
          <InfoLines details={item.details} redAccent={item.redAccent} />
          <ProgramButton text={item.buttonText} url={item.buttonUrl} red={item.redAccent} />
        </div>
      </div>
    </section>
  );
}

function SplitLearnCard({ item }) {
  return (
    <section className="clinicCard">
      <h3 className="clinicTitle pinkTitle">{item.title}</h3>
      <h4 className="clinicSubtitle">{item.subtitle}</h4>
      <div className="titleUnderline" />

      <div className="cardContent splitLearnCardContent">
        <div className="posterColumn">
          <ImageFrame src={item.image} alt={item.title} />
        </div>

        <div className="multiProgramColumns">
          {item.columns.map((column, index) => (
            <div className="programColumnWrap" key={column.heading}>
              <div className="programColumn">
                <h5 className="columnHeading">{column.heading}</h5>
                <InfoLines details={column.details} />
                <ProgramButton text={column.buttonText} url={column.buttonUrl} />
              </div>

              {index !== item.columns.length - 1 ? (
                <div className="verticalDivider" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SplitPartnerCard({ item }) {
  return (
    <section className="clinicCard">
      <h3 className="clinicTitle partneredTitle">{item.title}</h3>
      <div className="titleUnderline" />

      <div className="cardContent splitPartnerCardContent">
        <div className="posterColumn">
          <ImageFrame src={item.image} alt={item.title} />
        </div>

        <div className="dualProgramGrid">
          <div className="dualProgramColumn">
            <h4 className="dualProgramHeading">{item.leftProgram.heading}</h4>
            <InfoLines details={item.leftProgram.details} />
            <ProgramButton text={item.leftProgram.buttonText} url={item.leftProgram.buttonUrl} />
            {item.leftProgram.buttonNote ? (
              <p className="buttonNote">{item.leftProgram.buttonNote}</p>
            ) : null}
          </div>

          <div className="dualProgramColumn">
            <h4 className="dualProgramHeading">{item.rightProgram.heading}</h4>
            <InfoLines details={item.rightProgram.details} />
            <ProgramButton text={item.rightProgram.buttonText} url={item.rightProgram.buttonUrl} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="pageShell">
      <main className="clinicsPage">
        <header className="heroHeader">
          <div className="heroHeaderInner">
            <img src={wingsLogo} alt="Wings Arena logo" className="heroLogo" />
            <h1>Camps &amp; Clinics</h1>
          </div>
        </header>

        <section className="sectionLabelWrap">
          <div className="sectionLabel">In-House Clinics</div>
        </section>

        <div className="cardsStack">
          {inHouseClinics.map((item) =>
            item.useSplitLayout ? (
              <SplitLearnCard key={`${item.title}-${item.subtitle}`} item={item} />
            ) : (
              <StandardCard key={`${item.title}-${item.subtitle}`} item={item} />
            )
          )}
        </div>

        <section className="sectionLabelWrap partneredLabelWrap">
          <div className="sectionLabel lightLabel">Partnered Clinics</div>
        </section>

        <div className="cardsStack partneredStack">
          {partneredClinics.map((item, index) => (
            <div key={item.title}>
              {item.splitTwoPrograms ? (
                <SplitPartnerCard item={item} />
              ) : (
                <StandardCard item={item} />
              )}

              {index !== partneredClinics.length - 1 ? (
                <div className="sectionDivider" />
              ) : null}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}