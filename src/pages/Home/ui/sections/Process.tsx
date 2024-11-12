import React from "react";
import Image from "../../../../shared/ui/Image";
import StarText from "../../../../shared/ui/StarText/StarText";
import LogButton from "../../../../shared/ui/LogButton/LogButton";
import ProcessLogButton from "../components/ProcessLogButton";
import Reveal from "../../../../shared/ui/Reveal/Reveal";

const Process = () => {
  return (
    <section className="process">
      
      <Reveal className="container">
        <header className="process__header">
          <h2 className="process__header-title">5 minute set-up process</h2>
          <p className="process__header-description">
            Just take <span>5 minutes</span> to fill in some info, choose a
            killer template, and bam! Your personalized portfolio website is
            ready.
          </p>
        </header>
        <div className="process__complete-block">
          <div className="background-rectangle"/>
          
          <div className="process__complete-wrapper">

            <Image className="process__image" imageName="processImage.png" />
            <div className="process__complete-text">
                <StarText className="process__star-text">How It Works</StarText>
                <div className="process__complete-text-block">
                <h4 className="process__complete-title">Complete Your Profile</h4>
                <p className="process__complete-description">
                    Just share your details, choose a template, and see your
                    personal portfolio magically appear. Confirm or make any changes
                    you like, and Grab a special link to share your portfolio with
                    everyone. Boost your online presence the easy way!
                </p>
                  <ProcessLogButton />
                </div>
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Process;
