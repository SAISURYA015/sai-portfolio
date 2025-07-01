import { MdCastForEducation } from "react-icons/md";
import { BiSolidInstitution } from "react-icons/bi";
import { CgOrganisation } from "react-icons/cg";
import { motion } from "framer-motion";

function Resume() {
  const resumeData = [
    {
      title: "Work Experience",
      data: [
        {
          icon: <CgOrganisation size={35} className="text-[#FF4081]" />,
          company: "Software Developer, VBLP Tech Solutions, Hyderabad",
          dura: "Jun 2025 - Present",
          responsibility: (
            <ul className="list-disc px-5 text-[12px] md:text-[16px] lg:text-lg">
              <li>
                Developed responsive React.js web components using Tailwind CSS,
                React Router, and custom UI libraries (e.g., shadcn/ui) to build
                brand pages, modals, and mobile-friendly menus with dynamic
                route-based styling.
              </li>
              <li>
                Implemented PDF preview and download features in React
                applications, enabling users to view reports inline before
                downloading, optimizing both UX and accessibility.
              </li>
              <li>
                Resolved advanced UI/UX layout bugs including image alignment
                issues, mobile sidebar auto-close behavior, and consistent
                responsive spacing for cards and grid layouts.
              </li>
              <li>
                Integrated backend APIs using Axios for real-time data fetching
                and rendering of dynamic content like brand cards, logos, and
                menus across multiple components.
              </li>
            </ul>
          ),
        },
        {
          icon: <CgOrganisation size={35} className="text-[#FF4081]" />,
          company: "Software Developer, Navakarana Technologies, Hyderabad",
          dura: "May 2024 - May 2025",
          responsibility: (
            <ul className="list-disc px-5 text-[12px] md:text-[16px] lg:text-lg">
              <li>
                Developed web applications using React.js, ShadCN, and
                implemented role-based access control.
              </li>
              <li>
                Optimized performance with lazy loading, dynamic imports, and
                reduced API calls.
              </li>
              <li>
                Implemented authentication, authorization, error handling, and
                form validations using Formik.
              </li>
              <li>
                Integrated WhatsApp messaging and interactive animations using
                Framer Motion for better user experience.
              </li>
            </ul>
          ),
        },
        {
          icon: <CgOrganisation size={35} className="text-[#FF4081]" />,
          company: "Software Developer, ReachAll Techlabs Pvt. Ltd.Hyderabad",
          dura: "September 2023 - April 2024",
          responsibility: (
            <ul className="list-disc px-5 text-[12px] md:text-[16px] lg:text-lg">
              <li>
                Created Multiple responsive web pages for mobile and Desktop
                devices using HTML5, CSS3, JavaScript as well as third-party
                libraries such as jQuery.
              </li>
              <li>
                Developed HTML layout, Email templates, Responsive type reusable
                codes of Boot strap Components and utilities.
              </li>
              <li>Maintain Website deployment and hosting related issues. </li>
            </ul>
          ),
        },
        {
          icon: <CgOrganisation size={35} className="text-[#FF4081]" />,
          company: "Web Developer Intern, Emblix Solutions, Hyderabad",
          dura: "Jul 2023 - August 2023",
          responsibility: (
            <ul className="list-disc px-5 text-[12px] md:text-[16px] lg:text-lg">
              <li>
                Utilized HTML, CSS and JavaScript to Create responsive landing
                page for both company and Client
              </li>
              <li>
                Developed HTML Email templates, JavaScript Functionality and
                bootstrap Components.
              </li>
              <li>
                Maintained End to End website functionality, leading to downtime
                rate of 3.3%{" "}
              </li>
            </ul>
          ),
        },
        {
          icon: <CgOrganisation size={35} className="text-[#FF4081]" />,
          company:
            "Technical Operations Specialist, Selsyn Infra Projects Pvt. Ltd, Hyderabad",
          dura: "March 2018 - November 2022",
          responsibility: (
            <ul className="list-disc px-5 text-[12px] md:text-[16px] lg:text-lg">
              <li>
                Handle technical issues, install & configure hardware, software,
                networks, printers, and scanners.
              </li>
              <li>
                Collaborate with architects, engineers & contractors for MEP
                system integration in building designs.
              </li>
              <li>
                Prepare technical specs, design calculations & construction
                drawings for installation teams.
              </li>
              <li>
                Identify & resolve design/construction issues, optimizing system
                performance & reducing costs.
              </li>
            </ul>
          ),
        },
      ],
      instEdu: [],
    },
    {
      instEdu: [
        {
          title: "Institution",
          data: [
            {
              icon: <BiSolidInstitution size={35} className="text-[#FF4081]" />,
              cname: "Nxtwave",
              sector: "Full Stack Development",
              cgpa: "HTML, CSS, JavaScript, ReactJS, NodeJS, Python, SQL, Git",
              pasout: "Dec 2022 - Jul 2023",
            },
          ],
        },
        {
          title: "Education",
          data: [
            {
              icon: <MdCastForEducation size={35} className="text-[#FF4081]" />,
              cname: "Eluru College Of Engineering & Technology, Eluru",
              sector: "Mechnical Engineering",
              cgpa: "6.78 DGPA",
              pasout: "2017",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="bg-[#00E6FF] min-h-[250vh] md:min-h-[250vh] overflow-hidden">
      <div className="py-10">
        <h1 className="text-lg md:text-3xl lg:text-6xl font-bold pb-5 px-10">
          My Resume
        </h1>
        <div className="border-2 border-dashed"></div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8 p-5 lg:p-8">
        {resumeData.map((section, index) => {
          console.log(section);
          return (
            <div key={index} className="lg:py-10">
              {section.title && (
                <motion.div
                  initial={{ opacity: 0, translateX: "-30%" }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <h1 className="text-base md:text-2xl lg:text-3xl font-bold lg:pb-5">
                    {section.title}
                  </h1>
                  {section.data?.map(
                    (
                      item,
                      dataIdx // Ensure `data` exists before mapping
                    ) => (
                      <div
                        key={dataIdx}
                        className="relative h-[570px] md:h-[430px] w-1 bg-[#FF4081] my-5"
                      >
                        <div className="absolute top-10 flex lg:gap-x-4 items-start">
                          <p>{item.icon}</p>
                          <div className="border-2 h-auto w-[350px] md:w-[680px] lg:w-[800px] xl:w-[650px] p-3">
                            <p className="font-semibold font-serif">
                              {item.company}
                            </p>
                            <p className="font-semibold font-serif">
                              {item.role}
                            </p>
                            <p className="font-medium font-serif">
                              {item.responsibility}
                            </p>
                            <p className="font-semibold font-serif">
                              {item.dura}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </motion.div>
              )}
              {section.instEdu?.map((part, idx) => {
                console.log("part", part);
                return (
                  <motion.div
                    initial={{ opacity: 0, translateX: "30%" }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 1.5 }}
                    key={idx}
                  >
                    <h2 className="text-base md:text-2xl lg:text-3xl font-bold pb-5">
                      {part.title}
                    </h2>
                    {part.data.map((item, partIdx) => (
                      <div
                        key={partIdx}
                        className="relative h-[200px] md:h-[250px] w-1 bg-[#FF4081] my-5"
                      >
                        <div className="absolute top-10 flex gap-x-4 items-start">
                          <p>{item.icon}</p>
                          <div className="border-2 h-auto w-[250px] md:w-[580px] lg:w-[800px] xl:w-[650px] p-3">
                            <p className="text-[12px] md:text-lg font-semibold font-serif">
                              {item.cname}
                            </p>
                            <p className="text-[12px] md:text-lg font-medium font-serif">
                              {item.sector}
                            </p>
                            <p className="text-[12px] md:text-lg font-medium font-serif">
                              {item.cgpa}
                            </p>
                            <p className="text-[12px] md:text-lg font-medium font-serif">
                              {item.pasout}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Resume;
