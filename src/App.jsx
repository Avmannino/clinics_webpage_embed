import "./App.css";
import tuneUpFlyer from "./assets/tune-up-flyer.png";
import learnToSkateFall from "./assets/learn-to-skate-fall.png";
import learnToSkateSummer from "./assets/learn-to-skate-summer.png";
import erikNatesImage from "./assets/erik-nates.png";
import gretzkyImage from "./assets/gretzky.jpg";
import nycRGoaltendingImage from "./assets/miro.png";
import wingsLogo from "./assets/wings-logo.png";

const inHouseClinics = [
  {
    title: 'Pre-Season "Tune Up" Clinic',
    image: tuneUpFlyer,
    details: [
      { label: "Dates", value: "Friday, 9/4 - Monday, 9/7" },
      { label: "Location", value: "Wings Arena" },
      { heading: "Friday 9/4 - Sunday 9/6" },
      { label: "Mites", value: "12:30 PM - 2:00 PM" },
      { label: "Squirts", value: "2:10 PM - 3:40 PM" },
      { label: "Peewee", value: "3:50 PM - 5:20 PM" },
      { label: "Bantam", value: "5:30 PM - 7:00 PM" },
      { heading: "Monday 9/7" },
      { label: "Mites", value: "12:30 PM - 2:00 PM" },
      { label: "Squirts", value: "3:20 PM - 4:50 PM" },
      { label: "Peewee", value: "5:00 PM - 6:30 PM" },
      { label: "Bantam", value: "6:40 PM - 8:10 PM" },
    ],
    buttonText: "Register Here",
    buttonUrl: "https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=8390&GroupID=4098427",
  },
  {
    title: "Wings Arena | Learn To Skate & Learn to Play Programs",
    subtitle: "Fall Sessions",
    image: learnToSkateFall,
    useSplitLayout: true,
    columns: [
      {
        heading: "LTP",
        details: [
          { label: "Start Date", value: "Sept 8, 2026 (Tue) | Sept 11, 2026 (Fri)" },
          { label: "Duration", value: "10-week session, 60 min class" },
          { label: "Tuesdays", value: "3:20 PM - 4:20 PM" },
          { label: "Fridays", value: "3:55 PM - 4:55 PM" },
          { label: "Location", value: "Wings Arena" },
          { label: "Ages", value: "3 - 10 years old" },
          { label: "Price", value: "$495 (1 class/week) | $740 (2 classes/week)" },
        ],
        buttonText: "Register — Learn To Play",
        buttonUrl: "https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=8390&GroupID=4084756#SelectRegistrationType",
      },
      {
        heading: "LTS",
        details: [
          { label: "Start Date", value: "Sept 8, 2026 (Tue) | Sept 11, 2026 (Fri)" },
          { label: "Duration", value: "10-week session, 30 min class" },
          { label: "Tuesdays", value: "3:20 PM - 3:50 PM | 3:50 PM - 4:20 PM" },
          { label: "Fridays", value: "3:55 PM - 4:25 PM | 4:25 PM - 4:55 PM" },
          { label: "Location", value: "Wings Arena" },
          { label: "Ages", value: "3 - 10 years old" },
          { label: "Price", value: "$350 (1 class/week) | $525 (2 classes/week)" },
        ],
        buttonText: "Register — Learn to Skate",
        buttonUrl: "https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=8390&GroupID=4084755#SelectRegistrationType",
      },
    ],
  },
  {
    title: "Wings Arena | Learn To Skate & Learn to Play Programs",
    subtitle: "Summer Sessions",
    image: learnToSkateSummer,
    useSplitLayout: true,
    columns: [
      {
        heading: "LTP",
        details: [
          { label: "Start Date", value: "June 27, 2026" },
          { label: "Duration", value: "8-week session, 60 min class" },
          { label: "Saturdays", value: "9:40 AM - 10:40 AM" },
          { label: "Sundays", value: "9:40 AM - 10:40 AM" },
          { label: "Location", value: "Wings Arena" },
          { label: "Ages", value: "3 - 10 years old" },
          { label: "Price", value: "$350 (1 class/week) | $525 (2 classes/week)" },
        ],
        buttonText: "Register — Learn To Play",
        buttonUrl: "https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=8390&GroupID=4038153",
      },
      {
        heading: "LTS",
        details: [
          { label: "Start Date", value: "June 27, 2026" },
          { label: "Duration", value: "8-week session, 30 min class" },
          { label: "Saturdays", value: "9:40 AM - 10:10 AM | 10:10 AM - 10:40 AM" },
          { label: "Sundays", value: "9:40 AM - 10:10 AM | 10:10 AM - 10:40 AM" },
          { label: "Location", value: "Wings Arena" },
          { label: "Ages", value: "3 - 10 years old" },
          { label: "Price", value: "$250 (1 class/week) | $375 (2 classes/week)" },
        ],
        buttonText: "Register — Learn to Skate",
        buttonUrl: "https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=8390&GroupID=4038152",
      },
    ],
  },
];

const partneredClinics = [
  {
    title: "Erik Nates Euro Hockey",
    image: erikNatesImage,
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
  {
    title: "NYC R Goaltending",
    image: nycRGoaltendingImage,
    imageContain: true,
    details: [
      { label: "Dates", value: "Various" },
      { label: "Time", value: "Various" },
      { label: "Location", value: "Wings Arena" },
      { label: "Ages", value: "Various" },
      { label: "Email", value: "nycrgoaltending@gmail.com" },
      {
        label: "Instagram",
        value: (
          <a href="https://www.instagram.com/nyc_r_goaltending" target="_blank" rel="noopener noreferrer">
            @nyc_r_goaltending
          </a>
        ),
      },
    ],
    buttonText: "Visit Website",
    buttonUrl: "https://www.nycrgoaltending.com/",
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
      {details.map((item, index) =>
        item.heading ? (
          <p key={`heading-${item.heading}-${index}`} className="infoGroupHeading">
            {item.heading}
          </p>
        ) : (
          <p
            key={`${item.label}-${item.value}-${index}`}
            className={`infoLine ${redAccent ? "redAccent" : ""}`}
          >
            {item.label ? <span className="infoLabel">{item.label}</span> : null}{" "}
            <span className="infoValue">{item.value}</span>
          </p>
        )
      )}
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
          {item.buttonNote ? <p className="buttonNote">{item.buttonNote}</p> : null}
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