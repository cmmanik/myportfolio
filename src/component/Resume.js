import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

var propic =
  "https://media.licdn.com/dms/image/C5103AQF4S8p-lJlddg/profile-displayphoto-shrink_200_200/0?e=1555545600&v=beta&t=BUDjDERai5ZE6EhagsY4ab8JTY5_yxflq-kUKV4bLDQ";
class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4} className="sdfsdafsadf">
            <div style={{ textAlign: "center" }}>
              <img src={propic} alt="avatar" className="resimg" />
            </div>

            <h2 style={{ paddingLeft: "1em", color: "#2f5c75" }}>CM Manik</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Loxmipur, Birgonj, Dinajpur</p>
            <h5>Phone</h5>
            <p>+88017808498889</p>
            <h5>Email</h5>
            <p>cm.dpi15@gmail.com</p>
            <h5>Web</h5>
            <p>fb.com/cmmanik</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col sdfsdfsdf" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2004}
              endYear={2009}
              schoolName="Loxmipur Primary School"
              scInfo="Loxmipur Primary School was established in 1854 in the Pratap House by the Raja Tarakanath. It 1856 the government nationalised the school.Despite the nationalisation, the school was still financially supported by the Raja and other local influentials in the 19th century. It has one of best graduation Primary School in Bangladesh."
            />
            <Education
              startYear={2010}
              endYear={2015}
              schoolName="Loxmipur High School"
              scInfo="Loxmipur High School was established in 1994 in the Dinajpur District. It 1856 the government nationalised the high school. It has one of best graduation High School in Bangladesh."
            />
            <Education
              startYear={2015}
              endYear={"Present"}
              schoolName="DINAJPUR Polytechnic Institute"
              scInfo="DINAJPUR Polytechnic institute a largest and reputed Government polytechnic institute in Bangladesh which was established in 1964.This polytechnic has controlled by the Government of Bangladesh and under the Bangladesh Technical Education Board (BTEB) .

                 DINAJPUR Polytechnic institute is One of the Biggest Polytechnic Institute in Bangladesh. there are Three hostels two for boys and One for girls. A big play ground and also has facilities for indoor games. DINAJPUR Polytechnic institute (DPI) provide 4 years Diploma in Engineering Course under the (BTEB) as maintaining International Standard"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobInfo="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <Experience
              startYear={2012}
              endYear={2016}
              jobName="Second Job"
              jobInfo="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={100} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={25} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
