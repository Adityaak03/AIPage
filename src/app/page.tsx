
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
      <div className={styles.attentionDiv}>
        <div className={styles.attentionText}>
          <div>
            Attention, <span className={styles.blueText}>BITSIANs</span>
          </div>
          <p>
            If you're eager to enhance your abilities and boost your chances of securing a fantastic SI or placement opportunity, you're in the right place! Gain access to <span className={styles.blueText}>Placement Training Resources</span> right now and build your resume using Blindfold AI's own <span className={styles.blueText}>AI-powered resume builder</span>!
          </p>
          <div>
            It's time to take charge of your future and soar to new heights!🚀
          </div>
        </div>


      </div>
      <div className={styles.middleDivsWrapper}>
        <div className={styles.middleDiv}>
          <div className={styles.middleDivHeader}>
            <h3><span className={styles.pinkText}>AI-powered</span> Resume Builder</h3>
          </div>
          <div className={styles.middleDivText}>
            Level up your resume with <span className={styles.pinkText}>Blindfold.ai</span> Resumes!
            Enhance your resume with Al curated content, easily manage multiple resumes for different target jobs and create biased masked ATS-friendly resumes....
          </div>
          <div className={styles.btnWrapper}>
            <div className={styles.middleDivBtn}>
              Start Building With Blindfold.ai
            </div>
          </div>
        </div>
        <div className={styles.middleDiv}>
          <div className={styles.middleDivHeader}>
            <h3><span className={styles.pinkText}>One-Click Apply</span> to Jobs</h3>
          </div>
          <div className={styles.middleDivText}>
            Using <span className={styles.pinkText}>Blindfold.ai's Chrome extension</span>  you can one click fill out job applications using your preferred resume, making applying to jobs on platforms like Greenhouse, Lever, Linkedin, and Eightfold.ai a breeze.
          </div>
          <div className={styles.btnWrapper}>
            <div className={styles.middleDivBtn}>
              Download Chrome Extension
            </div>
          </div>
        </div>
      </div>
      <div className={styles.resumeResources}>
        <h3>
          Resume Resources
        </h3>
        <div className={styles.resumeCards}>
          <ul className={styles.card}>
            <li className={styles.cards}>
              <div className={styles.cardText}>
                <h3 className={styles.cardText1}>Text</h3>
                <a className={styles.view} href="#">View&nbsp; &rsaquo;</a>
              </div>
              <div className={styles.cardImage}>
                  image
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>)
}
