import "./App.css";

const inHouseClinics = [
  {
    title: "Wings Arena | Learn To Skate & Learn to Play Programs",
    subtitle: "Spring Sessions",
    image: "/src/assets/learn-to-skate-spring.png",
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
      },
    ],
  },
];

const partneredClinics = [
  {
    title: "Erik Nates Euro Hockey",
    image: "/src/assets/erik-nates.png",
    splitTwoPrograms: true,
    leftProgram: {
      heading: "Spring Break Clinic",
      details: [
        { label: "Dates", value: "04/06 - 04/09" },
        { label: "Time", value: "8:30 AM - 11:00 AM" },
        { label: "Location", value: "Wings Arena" },
        { label: "Ages", value: "7 - 15 years old" },
      ],
      buttonText: "Register Here",
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
    },
  },
  {
    title: "Kurt Nichols Power Skating",
    image: "/src/assets/kurt-nichols.png",
    redAccent: true,
    details: [
      { label: "Dates", value: "04/11/26 - 05/30/26" },
      { label: "Times", value: "Saturdays: 5:00PM - 6:20PM" },
      { label: "Location", value: "Wings Arena" },
      { label: "Ages", value: "Birth Years - 2012, 2013, 2014" },
    ],
    buttonText: "Register Here",
  },
];

function ImageFrame({ src, alt }) {
  return (
    <div className="imageFrame">
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

function ProgramButton({ text, red = false }) {
  return (
    <button className={`programButton ${red ? "redButton" : ""}`} type="button">
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
          <ImageFrame src={item.image} alt={item.title} />
        </div>

        <div className="detailsColumn">
          <InfoLines details={item.details} redAccent={item.redAccent} />
          <ProgramButton text={item.buttonText} red={item.redAccent} />
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
                <ProgramButton text={column.buttonText} />
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
            <ProgramButton text={item.leftProgram.buttonText} />
          </div>

          <div className="dualProgramColumn">
            <h4 className="dualProgramHeading">{item.rightProgram.heading}</h4>
            <InfoLines details={item.rightProgram.details} />
            <ProgramButton text={item.rightProgram.buttonText} />
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
            <img src="/src/assets/wings-logo.png" alt="Wings Arena logo" className="heroLogo" />
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