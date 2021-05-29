/** @format */

import React from "react";
import SkillsItems from "./SkillsItems";
import xd from "../img/adobexd.png";
import css from "../img/css3.png";
import express from "../img/Expressjs.png";
import github from "../img/github.png";
import gulp from "../img/gulp.png";
import html from "../img/html5.png";
import il from "../img/illustrator.png";
import ps from "../img/photoshop.png";
import js from "../img/javascript.png";
import mongo from "../img/mongodb.png";
import node from "../img/nodejs.png";
import react from "../img/react.png";
import sass from "../img/sass.png";
import wp from "../img/wordpress.png";
import atom from "../img/atom.png";
import filezilla from "../img/filezilla.png";
import mac from "../img/mac.png";
import windows from "../img/windows.png";
import vsc from "../img/vsc.png";

const Abilities = () => {
  return (
    <div className="abilities">
      <div className="container">
        <h2 className="title">Abilities</h2>
        <div className="about-section">
          <div className="skills">
            <div>
              <h3>Hard Skills</h3>
              <ul>
                <SkillsItems title="HTML" isIcon icon={html} />
                <SkillsItems title="CSS" isIcon icon={css} />
                <SkillsItems title="JavaScript" isIcon icon={js} />
                <SkillsItems title="React" isIcon icon={react} />
                <SkillsItems title="Sass" isIcon icon={sass} />
                <SkillsItems title="Wordpress" isIcon icon={wp} />
                <SkillsItems title="Gulp" isIcon icon={gulp} />
              </ul>
              <h4>Not competitive yet</h4>
              <ul>
                <SkillsItems title="MongoDB" isIcon icon={mongo} />
                <SkillsItems title="Express" isIcon icon={express} />
                <SkillsItems title="Nodejs" isIcon icon={node} />
              </ul>
            </div>
            <div>
              <h3>Tools</h3>
              <ul>
                <SkillsItems title="Adobe Illustrator" isIcon icon={il} />
                <SkillsItems title="Adobe Photoshop" isIcon icon={ps} />
                <SkillsItems title="Github" isIcon icon={github} />
                <SkillsItems title="Visual Studio Code" isIcon icon={vsc} />
                <SkillsItems title="Atom" isIcon icon={atom} />
                <SkillsItems title="FileZilla" isIcon icon={filezilla} />
                <SkillsItems title="Mac" isIcon icon={mac} />
                <SkillsItems title="Windows" isIcon icon={windows} />
              </ul>
              <h4>Not competitive yet</h4>
              <ul>
                <SkillsItems title="Adobe XD" isIcon icon={xd} />
              </ul>
            </div>
          </div>
          <div className="tools">
            <div>
              <h3>Soft Skills</h3>
              <ul>
                <SkillsItems title="Empathy" />
                <SkillsItems title="Good communication" />
                <SkillsItems title="Teamwork" />
                <SkillsItems title="Creativity" />
                <SkillsItems title="Willingness to learn" />
                <SkillsItems title="Adaptability" />
              </ul>
            </div>
            <div>
              <h3>Languages</h3>
              <ul>
                <SkillsItems title="Spanish (native)" />
                <SkillsItems title="English (intermediate)" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abilities;
