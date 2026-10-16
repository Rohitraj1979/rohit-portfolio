import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const assetsPath = "/images/projects/iv-drop-monitoring/";

const hardware = [
  { icon: "cpu", title: "NodeMCU ESP32", category: "Controller", description: "Reads the sensor inputs and runs the threshold and filtering logic described in the project documentation." },
  { icon: "sensor", title: "AXTEK water-level sensor", category: "Fluid sensing", description: "Detects IV fluid status without contacting the fluid." },
  { icon: "pulse", title: "MAX30100", category: "Pulse sensing", description: "Provides heart-rate and SpO2 readings for monitoring." },
  { icon: "servo", title: "Servo + roller clamp", category: "Actuation", description: "The servo operates the roller-clamp mechanism when the IV bottle is detected as empty; the build includes a 3D-printed part." },
  { icon: "alert", title: "Buzzer", category: "Local alert", description: "Provides an audible alert at the prototype." },
  { icon: "power", title: "5V power supply", category: "Power", description: "USB, power bank, or another suitable 5V supply. Stable power was needed for reliable operation." },
];

const workflow = [
  { icon: "sensor", title: "Water-level sensing", tag: "INPUT 01", description: "The AXTEK non-contact sensor monitors the IV fluid status." },
  { icon: "cpu", title: "ESP32 processing", tag: "CONTROL", description: "The ESP32 reads the inputs and applies the documented threshold logic. Readings are filtered or averaged to reduce noise." },
  { icon: "pulse", title: "Pulse and SpO2 reading", tag: "INPUT 02", description: "The MAX30100 provides heart-rate and SpO2 readings for the monitoring view." },
  { icon: "servo", title: "Local response", tag: "DEVICE OUTPUTS", description: "For an empty-bottle condition, the documented workflow instructs the servo to close the roller clamp. A buzzer provides a local alert." },
  { icon: "cloud", title: "Blynk monitoring", tag: "WI-FI PATH", description: "Monitoring information and IoT alerts are sent through Wi-Fi to Blynk Cloud and the mobile application." },
];

const features = [
  { icon: "sensor", category: "SENSING", title: "Non-contact IV level detection", description: "The AXTEK sensor checks fluid status without touching the IV fluid.", tone: "sensor" },
  { icon: "pulse", category: "MONITORING", title: "Heart-rate and SpO2 readings", description: "The MAX30100 supplies pulse and oxygen-saturation readings to the monitoring system.", tone: "monitor" },
  { icon: "servo", category: "AUTOMATION", title: "Roller-clamp response", description: "The servo is instructed to close the clamp when the IV bottle is detected as empty.", tone: "automation" },
  { icon: "alert", category: "LOCAL ALERT", title: "Audible buzzer", description: "A local buzzer gives an audible alert at the device.", tone: "alert" },
  { icon: "cloud", category: "IOT", title: "Blynk monitoring", description: "Blynk Cloud and the mobile application display monitoring information and IoT alerts over Wi-Fi.", tone: "iot" },
  { icon: "filter", category: "SIGNAL HANDLING", title: "Smoothed readings", description: "Filtering or averaging is used to reduce sensor noise and stabilize readings.", tone: "signal" },
];

const software = [
  { icon: "code", title: "Arduino IDE", description: "Used to develop and upload the embedded program to the ESP32." },
  { icon: "code", title: "Embedded C/C++", description: "Firmware language used for sensor reading and programmed control logic." },
  { icon: "cloud", title: "Blynk app + Cloud", description: "Connected monitoring and IoT alerts over Wi-Fi." },
];

function Icon({ name }) {
  const paths = {
    cpu: <><rect x="5" y="5" width="14" height="14" rx="2" /><path d="M9 9h6v6H9zM9 1v4m6-4v4M9 19v4m6-4v4M1 9h4m-4 6h4m14-6h4m-4 6h4" /></>,
    sensor: <><path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6l1.5 1.5m9.8 9.8 1.5 1.5m0-12.8-1.5 1.5m-9.8 9.8-1.5 1.5" /><circle cx="12" cy="12" r="5" /><path d="M9 13h6" /></>,
    pulse: <><path d="M2 12h4l2-6 4 12 3-8 2 2h5" /><circle cx="12" cy="12" r="10" /></>,
    servo: <><path d="M5 8h14v12H5zM8 8V5h8v3m-4 0v5m0 0 4-3m-4 3-4-3" /><path d="M9 20v2m6-2v2" /></>,
    alert: <><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12h4" /></>,
    cloud: <><path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 9a4.5 4.5 0 0 0 1 9Z" /><path d="m9 14 3 3 3-3m-3 3v-6" /></>,
    power: <><path d="M12 2v10m6.4-6.4a9 9 0 1 1-12.8 0" /></>,
    filter: <><path d="M3 5h18l-7 8v5l-4 2v-7L3 5Z" /><path d="M7 8h10" /></>,
    code: <><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
  };
  return <svg className="case-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.check}</svg>;
}

function Eyebrow({ number, children }) {
  return <p className="detail-eyebrow"><span>{number}</span>{children}</p>;
}

function ProjectDetails() {
  useEffect(() => {
    const targets = document.querySelectorAll(".project-detail [data-reveal]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return undefined;

    const page = document.querySelector(".project-detail");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

    targets.forEach((target) => observer.observe(target));
    page?.classList.add("reveal-ready");
    return () => {
      observer.disconnect();
      page?.classList.remove("reveal-ready");
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="project-detail case-study">
        <section className="detail-hero case-hero">
          <a className="detail-back project-demo" href="/#projects">&lt;- Back to Portfolio</a>
          <div className="detail-hero-grid" data-reveal>
            <div className="case-hero-copy">
              <p className="case-kicker"><span className="status-dot" /> IoT / HEALTHCARE PROTOTYPE</p>
              <h1 className="text-shimmer">IV Drop Monitoring and Heart Rate Alert System</h1>
              <p className="detail-lead">A student-built IoT prototype for observing IV fluid status and pulse readings, with a local device response and connected monitoring through Blynk.</p>
              <div className="detail-badges">{["ESP32", "AXTEK", "MAX30100", "Blynk", "Embedded C/C++"].map((item) => <span key={item}>{item}</span>)}</div>
              <p className="detail-disclaimer">Academic prototype only / Not clinically validated or intended for medical treatment.</p>
            </div>
            <div className="case-photo-placeholder" role="img" aria-label="Placeholder for the genuine IV monitoring prototype photograph">
              <span className="photo-corner photo-corner-one" /><span className="photo-corner photo-corner-two" />
              <span className="photo-mark"><Icon name="sensor" /></span>
              <strong>Prototype photograph</strong>
              <span className="photo-file">Add {assetsPath}prototype.jpg</span>
              <span className="photo-caption">REAL PROJECT PHOTO NEEDED</span>
            </div>
          </div>
        </section>

        <div className="detail-body case-body">
          <section className="detail-section case-problem" data-reveal>
            <div className="case-problem-glow" />
            <div className="case-section-head"><Eyebrow number="01">THE NEED</Eyebrow><h2 className="text-shimmer">Why monitor the IV line?</h2></div>
            <div className="problem-copy">
              <p>IV fluid level and patient pulse readings need observation. This project explores how a <strong>non-contact level sensor</strong> and a <strong>pulse oximeter</strong> can feed one prototype for local alerts and remote monitoring.</p>
              <p>The goal is to give a caregiver another way to see prototype readings and an empty-bottle condition. It remains a <strong>student project</strong>, not a substitute for clinical observation or a validated medical device.</p>
            </div>
            <div className="problem-rule"><span>MONITOR</span><i /><span>PROCESS</span><i /><span>ALERT</span></div>
          </section>

          <section className="detail-section case-solution" data-reveal>
            <div className="case-section-head"><Eyebrow number="02">PROPOSED SOLUTION</Eyebrow><h2 className="text-shimmer">Sense locally. Monitor remotely.</h2></div>
            <p className="case-intro">The documented design combines sensor readings, ESP32 control logic, local outputs, and a separate Blynk connection.</p>
            <div className="solution-grid">
              {[
                ["sensor", "Read the inputs", "AXTEK senses IV fluid status; MAX30100 provides heart-rate and SpO2 readings."],
                ["cpu", "Apply programmed logic", "ESP32 reads and filters/averages sensor data, then evaluates the documented thresholds."],
                ["cloud", "Report and respond", "The prototype gives local buzzer/servo outputs and sends monitoring information to Blynk over Wi-Fi."],
              ].map(([icon, title, description], index) => (
                <article className="solution-point skill-card" data-reveal key={title} style={{ "--reveal-delay": (index * 90) + "ms" }}>
                  <span className="solution-index">0{index + 1}</span><span className="solution-icon"><Icon name={icon} /></span>
                  <h3>{title}</h3><p>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="detail-section case-workflow" data-reveal>
            <div className="case-section-head"><Eyebrow number="03">DOCUMENTED WORKFLOW</Eyebrow><h2 className="text-shimmer">How the system works</h2></div>
            <p className="case-intro">The steps below summarize the supplied project workflow. Pulse readings are monitored; the documented empty-bottle condition drives the roller-clamp action.</p>
            <ol className="workflow-list">
              {workflow.map((step, index) => (
                <li className="workflow-step" data-reveal key={step.title} style={{ "--reveal-delay": (index * 75) + "ms" }}>
                  <span className="workflow-marker"><Icon name={step.icon} /></span>
                  <div className="workflow-content"><span className="workflow-tag">{step.tag}</span><h3>{step.title}</h3><p>{step.description}</p></div>
                  <span className="workflow-count">0{index + 1}</span>
                </li>
              ))}
            </ol>
            <p className="detail-caption case-note">No firmware source is included in this repository. The empty-bottle-to-servo path and the separate local/cloud paths are represented from the project brief, not independently verified from code.</p>
          </section>

          <section className="detail-section case-architecture" data-reveal>
            <div className="case-section-head"><Eyebrow number="04">SIGNAL FLOW</Eyebrow><h2 className="text-shimmer">System architecture</h2></div>
            <div className="architecture case-architecture-diagram" aria-label="Documented architecture: sensors connect to ESP32 processing, which drives local outputs and sends monitoring information to Blynk over Wi-Fi">
              <div className="arch-node skill-card"><span className="arch-node-icon"><Icon name="sensor" /></span><b>SENSORS</b><span>AXTEK fluid level<br />MAX30100 pulse / SpO2</span></div>
              <span className="arch-arrow" aria-hidden="true">-&gt;</span>
              <div className="arch-node arch-controller skill-card"><span className="arch-node-icon"><Icon name="cpu" /></span><b>ESP32 PROCESSING</b><span>Sensor readings<br />Thresholds + filtering</span></div>
              <div className="arch-branches">
                <p className="branch-title">Two documented paths from the controller</p>
                <div className="arch-branch arch-local"><b>LOCAL DEVICE OUTPUTS</b><span className="branch-connector" aria-hidden="true">|</span><div className="arch-outputs"><div className="arch-node skill-card"><b>SERVO</b><span>Roller clamp</span></div><div className="arch-node skill-card"><b>BUZZER</b><span>Audible alert</span></div></div></div>
                <div className="arch-branch arch-network"><b>WI-FI MONITORING</b><span className="branch-connector" aria-hidden="true">|</span><div className="arch-node arch-cloud skill-card"><span className="arch-node-icon"><Icon name="cloud" /></span><b>BLYNK</b><span>Cloud + mobile app<br />Monitor / IoT alerts</span></div></div>
              </div>
            </div>
            <p className="detail-caption">The servo and buzzer are shown on the local path; Blynk is a separate Wi-Fi monitoring path and is not shown as a dependency for local actuation. This represents the supplied project description; firmware was not found here.</p>
          </section>

          <section className="detail-section case-features" data-reveal>
            <div className="case-section-head"><Eyebrow number="05">PROTOTYPE CAPABILITIES</Eyebrow><h2 className="text-shimmer">Features described in the project</h2></div>
            <div className="feature-grid">
              {features.map((feature, index) => (
                <article className={"feature-card skill-card feature-" + feature.tone} data-reveal key={feature.title} style={{ "--reveal-delay": (index % 3 * 70) + "ms" }}>
                  <div className="feature-card-top"><span className="feature-icon"><Icon name={feature.icon} /></span><span className="feature-category">{feature.category}</span></div>
                  <h3>{feature.title}</h3><p>{feature.description}</p>
                  <span className="feature-accent" />
                </article>
              ))}
            </div>
            <p className="detail-caption case-note">These capabilities are described in the project brief. Hardware/firmware files were not available in this repository for independent implementation checks.</p>
          </section>

          <section className="detail-section case-hardware" data-reveal>
            <div className="case-section-head"><Eyebrow number="06">HARDWARE</Eyebrow><h2 className="text-shimmer">Built from real components</h2></div>
            <div className="detail-cards case-hardware-grid">
              {hardware.map((item, index) => (
                <article className="detail-card skill-card hardware-card" data-reveal key={item.title} style={{ "--reveal-delay": (index % 3 * 65) + "ms" }}>
                  <span className="hardware-index">HW / 0{index + 1}</span><span className="hardware-icon"><Icon name={item.icon} /></span>
                  <span className="hardware-category">{item.category}</span><h3>{item.title}</h3><p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="detail-section case-software" data-reveal>
            <div className="case-section-head"><Eyebrow number="07">SOFTWARE + CONNECTIVITY</Eyebrow><h2 className="text-shimmer">Tools behind the prototype</h2></div>
            <div className="software-grid">
              {software.map((item, index) => (
                <article className="software-card skill-card" data-reveal key={item.title} style={{ "--reveal-delay": (index * 75) + "ms" }}>
                  <Icon name={item.icon} /><div><h3>{item.title}</h3><p>{item.description}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section className="detail-section case-results" data-reveal>
            <div className="case-section-head"><Eyebrow number="08">CONTROLLED ACADEMIC TESTING</Eyebrow><h2 className="text-shimmer">Reported prototype results</h2></div>
            <p className="case-intro">Figures below are reported in the academic project documentation under controlled prototype conditions. They are not independent validation or clinical performance claims.</p>
            <div className="results-grid">
              <article className="result-card skill-card"><span className="metric-label">IV LEVEL DETECTION</span><strong>~95<span>%</span></strong><p>Reported IV fluid detection accuracy under controlled conditions.</p></article>
              <article className="result-card skill-card"><span className="metric-label">SYSTEM RESPONSE</span><strong>~0.5-1 <small>sec</small></strong><p>Approximate response time reported in the project documentation.</p></article>
              <article className="result-card result-context skill-card"><span className="metric-label">TEST CONTEXT</span><Icon name="check" /><p>Controlled prototype testing. Sensor placement, movement, noise, power stability, and Wi-Fi reliability affected performance.</p></article>
            </div>
            <p className="detail-caption case-note">Student prototype only. No clinical validation, certification, or guarantee of patient safety is claimed.</p>
          </section>

          <section className="detail-section case-challenges" data-reveal>
            <div className="case-section-head"><Eyebrow number="09">ENGINEERING ITERATION</Eyebrow><h2 className="text-shimmer">Challenges encountered</h2></div>
            <div className="challenge-grid">
              <article className="challenge-item"><span>01</span><div><h3>Noisy sensor readings</h3><p>Filtering or averaging was used to reduce noise and stabilize the reported readings.</p></div></article>
              <article className="challenge-item"><span>02</span><div><h3>Placement and movement</h3><p>Sensor positioning and movement affected detection; careful placement was needed during testing.</p></div></article>
              <article className="challenge-item"><span>03</span><div><h3>Power and Wi-Fi reliability</h3><p>Stable power supported operation, while network reliability affected connected Blynk monitoring.</p></div></article>
            </div>
          </section>

          <section className="detail-section case-future" data-reveal>
            <div className="case-section-head"><Eyebrow number="10">SCOPE + NEXT STEPS</Eyebrow><h2 className="text-shimmer">Limitations and future scope</h2></div>
            <div className="scope-grid">
              <article className="scope-panel scope-limit"><span className="scope-label">CURRENT LIMITS</span><h3>Prototype boundaries</h3><p>This is an academic student prototype, not a clinically validated medical device. Reported results come from controlled project testing. Sensor conditions, movement, power quality, and connectivity can affect operation.</p></article>
              <div className="future-panel"><span className="scope-label">FUTURE WORK / NOT IMPLEMENTED</span><ol className="future-list">
                <li><span>01</span><p>Evaluate sensor placement and detection across more operating conditions.</p></li>
                <li><span>02</span><p>Improve robustness against movement, noise, and power variation.</p></li>
                <li><span>03</span><p>Conduct formal validation before any real-world healthcare use.</p></li>
              </ol></div>
            </div>
          </section>

          <section className="detail-section case-gallery" data-reveal>
            <div className="case-section-head"><Eyebrow number="11">PROJECT MEDIA</Eyebrow><h2 className="text-shimmer">The build, documented</h2></div>
            <div className="gallery-grid">
              {[
                ["prototype.jpg", "Prototype build", "Full device photograph"],
                ["sensor-closeup.jpg", "Sensor close-up", "AXTEK and MAX30100"],
                ["servo-roller-clamp.jpg", "Clamp mechanism", "Servo and 3D-printed part"],
                ["architecture.png", "System diagram", "Original project architecture"],
                ["blynk-dashboard.png", "Blynk dashboard", "Actual mobile app screenshot"],
              ].map(([file, title, caption], index) => (
                <div className="gallery-placeholder skill-card" data-reveal key={file} style={{ "--reveal-delay": (index % 3 * 70) + "ms" }}>
                  <span className="gallery-index">MEDIA / 0{index + 1}</span><Icon name={index === 4 ? "cloud" : index === 3 ? "filter" : "sensor"} />
                  <strong>{title}</strong><span>{caption}</span><code>{assetsPath + file}</code>
                </div>
              ))}
            </div>
            <p className="detail-caption">No genuine project media was found in the repository. Replace each labelled placeholder with the corresponding original asset.</p>
          </section>

          <div className="detail-end"><p>Academic IoT monitoring prototype / Embedded systems + connected monitoring</p><a className="primary-button" href="/#projects">&lt;- Back to Portfolio</a></div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProjectDetails;

