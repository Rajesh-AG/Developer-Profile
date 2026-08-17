const educationData = [
  {
    id: 1,
    period: "2019 – 2020",
    level: "10th Standard",
    institution: "PRG Higher Secondary School",
    location: "Kattumannarkoil, Tamil Nadu",
    board: "State Board",
    score: "89.2%",
    scoreLabel: "Percentage",
    type: "school",
  },
  {
    id: 2,
    period: "2020 – 2022",
    level: "12th Standard",
    institution: "PRG Higher Secondary School",
    location: "Kattumannarkoil, Tamil Nadu",
    board: "State Board",
    score: "95%",
    scoreLabel: "Percentage",
    type: "school",
  },
  {
    id: 3,
    period: "2022 – 2026",
    level: "B.Tech — Information Technology",
    institution: "Adhiparasakthi Engineering College",
    location: "Melmaruvathur, Tamil Nadu",
    board: "Anna University",
    score: "8.5",
    scoreLabel: "CGPA",
    extra: "With Honours",
    type: "college",
  },
];

const colors = {
  school: {
    dot: "#1D9E75",
    dotBg: "#E1F5EE",
    bar: "linear-gradient(90deg, #1D9E75, #5DCAA5)",
    yearColor: "#0F6E56",
    badgeBg: "#E1F5EE",
    badgeText: "#085041",
  },
  college: {
    dot: "#534AB7",
    dotBg: "#EEEDFE",
    bar: "linear-gradient(90deg, #534AB7, #7F77DD)",
    yearColor: "#3C3489",
    badgeBg: "#EEEDFE",
    badgeText: "#3C3489",
  },
};

function Badge({ children, variant = "default", color }) {
  const styles = {
    display: "inline-flex",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: 500,
    padding: "3px 10px",
    borderRadius: "20px",
    background:
      variant === "colored" && color ? color.badgeBg : "#f1f1ef",
    color:
      variant === "colored" && color ? color.badgeText : "#5F5E5A",
    border: variant === "default" ? "0.5px solid #d3d1c7" : "none",
  };
  return <span style={styles}>{children}</span>;
}

function TimelineCard({ item, isLast }) {
  const c = colors[item.type];

  return (
    <div style={{ position: "relative", marginBottom: isLast ? 0 : "2rem" }}>
      {/* Dot */}
      <div
        style={{
          position: "absolute",
          left: "-21px",
          top: "8px",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          border: `2px solid ${c.dot}`,
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: c.dot,
          }}
        />
      </div>

      {/* Card */}
      <div
        style={{
          background: "#fff",
          border: "0.5px solid #d3d1c7",
          borderRadius: "12px",
          padding: "1rem 1.25rem",
          transition: "border-color 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.borderColor = "#888780")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.borderColor = "#d3d1c7")
        }
      >
        {/* Color bar */}
        <div
          style={{
            height: "3px",
            borderRadius: "2px",
            background: c.bar,
            marginBottom: "12px",
          }}
        />

        {/* Year + Level */}
        <p
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.06em",
            color: c.yearColor,
            margin: "0 0 6px",
          }}
        >
          {item.period} &nbsp;·&nbsp; {item.level}
        </p>

        {/* Institution */}
        <p
          style={{
            fontSize: "15px",
            fontWeight: 500,
            color: "#2C2C2A",
            margin: "0 0 2px",
          }}
        >
          {item.institution}
        </p>

        {/* Location · Board */}
        <p
          style={{
            fontSize: "13px",
            color: "#5F5E5A",
            margin: "0 0 12px",
          }}
        >
          {item.location} &nbsp;·&nbsp; {item.board}
        </p>

        {/* Badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          <Badge variant="colored" color={c}>
            {item.scoreLabel}: {item.score}
          </Badge>
          {item.extra && (
            <Badge variant="colored" color={colors.school}>
              {item.extra}
            </Badge>
          )}
          <Badge variant="default">{item.board}</Badge>
        </div>
      </div>
    </div>
  );
}

function SectionDivider({ label }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        margin: "0.5rem 0 2rem",
      }}
    >
      <span
        style={{
          fontSize: "11px",
          color: "#888780",
          whiteSpace: "nowrap",
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      <div
        style={{ flex: 1, height: "0.5px", background: "#d3d1c7" }}
      />
    </div>
  );
}

export default function EducationTimeline() {
  const schoolItems = educationData.filter((d) => d.type === "school");
  const collegeItems = educationData.filter((d) => d.type === "college");

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "2rem 1rem",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Header */}
      <p
        style={{
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#888780",
          marginBottom: "1.5rem",
        }}
      >
        Education
      </p>

      {/* Timeline */}
      <div
        style={{
          position: "relative",
          paddingLeft: "28px",
        }}
      >
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: "7px",
            top: "8px",
            bottom: "8px",
            width: "1.5px",
            background: "#d3d1c7",
            borderRadius: "2px",
          }}
        />

        {/* School cards */}
        {schoolItems.map((item, i) => (
          <TimelineCard
            key={item.id}
            item={item}
            isLast={false}
          />
        ))}

        {/* Divider */}
        <SectionDivider label="Higher Education" />

        {/* College cards */}
        {collegeItems.map((item, i) => (
          <TimelineCard
            key={item.id}
            item={item}
            isLast={i === collegeItems.length - 1}
          />
        ))}
      </div>
    </div>
  );
}