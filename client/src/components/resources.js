import React from "react";

const topics = [
  {
    name: "Project Identification and Design",
    id: "1",
    description:
      "Per the PMD Pro Guide, “It is during this phase that the project teams define the needs, explore opportunities, analyze the project environment, and design alternatives for project design.  The decisions made during [this phase] set the strategic and operational framework within which the project will subsequently operate” (p. 18).  This is perhaps the most important phase in the project management cycle, since everything determined during this phase has significant repercussions throughout all of the other phases.  Globally, American RC will not fund preparedness or recovery projects unless evidence of thoughtful data collection, analysis and reflection is presented indicating a strong project design.",
    resources: [
      {
        name: "HNS Identifies Problem to be Addressed by Project",
        id: "1",
        description:
          "What problems exist that would help HNS achieve its identified goals and outcomes? What problems align with AmRC/HNS Strategic Engagement Plan?",
        timeframe: [{ small: 1, medium: 1, large: 1 }],
        disciplines: ["Scope Management"],
        deliverables: [
          {
            deliverable_title: "Problem Statement",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Consults with AmRC on Project Development Process",
        id: "2",
        description:
          "What steps should be taken to develop the project proposal? What things should be taken into consideration?",
        timeframe: [{ small: 1, medium: 1, large: 1 }],
        disciplines: ["Stakeholder Management"],
        deliverables: [
          {
            deliverable_title: "Proposal Development Workplan",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Conducts a Situation Analysis - Secondary Data Collection",
        id: "3",
        description:
          "What existing data is there that would affect this project? Have there been needs assessments? Have there been capacity assessments? What government policies exist?",
        timeframe: [{ small: 3, medium: 5, large: 10 }],
        disciplines: [
          "Scope Management",
          "Stakeholder Management",
          "Justification Management",
          "Risk Management"
        ],
        deliverables: [
          {
            deliverable_title: "Situation Analysis Report",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name:
          "HNS Conducts a Situation Analysis - Primary Data Collection (if required)",
        id: "4",
        description:
          "What essential data is missing that would affect this project? What is the best way to collect it? Who can collect this information and how?",
        timeframe: [{ small: 0, medium: 5, large: 10 }],
        disciplines: [
          "Scope Management",
          "Stakeholder Management",
          "Justification Management",
          "Risk Management"
        ],
        deliverables: [
          {
            deliverable_title: "Situation Analysis Report",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name:
          "HNS and AmRC Collaboratively Conduct a Project Design Workshop (if required)",
        id: "5",
        description:
          "What essential data is missing that would affect this project? What is the best way to collect it? Who can collect this information and how?",
        timeframe: [{ small: 0, medium: 3, large: 5 }],
        disciplines: ["Stakeholder Management"],
        deliverables: [
          {
            deliverable_title: "Project Design Workshop TOR",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Conducts a Situation Analysis - Stakeholder Analysis",
        id: "6",
        description:
          "What essential data is missing that would affect this project? What is the best way to collect it? Who can collect this information and how?",
        timeframe: [{ small: 0.25, medium: 0.5, large: 1 }],
        disciplines: ["Stakeholder Management", "Risk Management"],
        deliverables: [
          {
            deliverable_title: "Stakeholder Matrix",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Conducts a Situation Analysis - SWOT Analysis",
        id: "7",
        description:
          "What are the strengths, weaknesses, opportunities, and threats to the implementing office? What is the best approach to build on strengths and capitalize off of opportunities? What is the best approach to improve weaknesses and to avoid threats?",
        timeframe: [{ small: 0.25, medium: 0.5, large: 1 }],
        disciplines: ["Stakeholder Management", "Risk Management"],
        deliverables: [
          {
            deliverable_title: "SWOT Analysis",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "SWOT Analysis",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Conducts a Problem Analysis",
        id: "8",
        description:
          "What are the main problems being addressed by the project? What are the causes? What are the impacts?",
        timeframe: [{ small: 0.25, medium: 0.5, large: 1 }],
        disciplines: ["Scope Management", "Justification Management"],
        deliverables: [
          {
            deliverable_title: "Problem Statement",
            deliverable_url: "",
            deliverable_thumb_url: ""
          },
          {
            deliverable_title: "Problem Tree",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "Problem Tree",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Conducts a Solution Analysis",
        id: "9",
        description:
          "What are potential solutions to the problems outlined? What is the theory of change which will underpin the project design and logical framework?  How and why will the proposed solutions address the problem?",
        timeframe: [{ small: 0.25, medium: 0.5, large: 1 }],
        disciplines: ["Scope Management", "Stakeholder Management"],
        deliverables: [
          {
            deliverable_title: "Solution Statement",
            deliverable_url: "",
            deliverable_thumb_url: ""
          },
          {
            deliverable_title: "Solution Tree",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "Solution Tree",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "Solution Tree - Philippines Delegation",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Conducts a Strategic Analysis",
        id: "10",
        description:
          "Of all the potential solutions to the problems outlined, which is the best approach? How do these solutions relate to the Philippine RC strategy? How do these solutions relate to the American RC strategy with the Philippine RC? What communication has taken place internally within Philippine RC about this project?  What feedback has been gathered?  What interaction has taken place with American RC personnel?",
        timeframe: [{ small: 0.25, medium: 0.5, large: 1 }],
        disciplines: ["Scope Management", "Stakeholder Management"],
        deliverables: [
          {
            deliverable_title: "",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Develops a Concept Note",
        id: "11",
        description:
          "Is there high-level approval for the idea? Does it make sense to continue with the proposal development process?",
        timeframe: [{ small: 2, medium: 3, large: 4 }],
        disciplines: ["Stakeholder Management"],
        deliverables: [
          {
            deliverable_title: "Concept Note",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Develops a Logical Framework ",
        id: "12",
        description:
          "How will progress against the selected solution be measured? What are SMART indicators of success? What are means of verification? What assumptions are being made?",
        timeframe: [{ small: 1, medium: 1, large: 3 }],
        disciplines: ["Scope Management", "Stakeholder Management"],
        deliverables: [
          {
            deliverable_title: "Logical Framework",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "Logical Framework",
            tool_url: require("../assets/phase_1/Proposal_Logframe_Template.docx"),
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "Logical Framework - Philippines Delegation",
            tool_example_url: require("../assets/phase_1/Proposal_Logframe_Template.docx"),
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Develops a Workplan",
        id: "13",
        description:
          "What individual tasks are required to achieve the outputs and outcomes outlined in the logical framework?",
        timeframe: [{ small: 1, medium: 3, large: 5 }],
        disciplines: ["Time Management"],
        deliverables: [
          {
            deliverable_title: "Workplan",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "Workplan",
            tool_url: require("../assets/phase_1/Proposal_Workplan_Template.xlsx"),
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "Workplan",
            tool_example_url: require("../assets/phase_1/Proposal_Workplan_Template.xlsx"),
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Defines Required Inputs - Staffing",
        id: "14",
        description:
          "What staff are required to complete the tasks identified? Which Philippine RC department would manage the day-to-day implementation of this project? What other Philippine RC departments would play key roles in the project?",
        timeframe: [{ small: 1, medium: 3, large: 5 }],
        disciplines: ["Resource Management"],
        deliverables: [
          {
            deliverable_title: "Staffing Plan",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "Staffing Plan",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Defines Required Inputs - Activities",
        id: "15",
        description:
          "What equipment is required to complete the tasks identified?",
        timeframe: [{ small: 1, medium: 3, large: 5 }],
        disciplines: ["Resource Management"],
        deliverables: [
          {
            deliverable_title: "Activity-Based Budget",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "Activity-Based Budget",
            tool_url: require("../assets/phase_1/Proposal_Budget_Template.xlsx"),
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title:
              "Activity-Based Budget - Philippines Delegation",
            tool_example_url: require("../assets/phase_1/Proposal_Budget_Template.xlsx"),
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Develops Project Proposal and Project Budget",
        id: "16",
        description:
          "What are the major security concerns and risks? What are the roles and responsibilities of organizations and departments? What sustainability considerations are there?  What potential partners exist? What budget line items will be used? How will costs be categorized? Have all overhead and management costs been included?  How will sources of funding be applied?  How will costs be shared across implementing partners (e.g. % cost share from Philippine RC in addition to American RC or other donor funds)? ",
        timeframe: [{ small: 5, medium: 10, large: 15 }],
        disciplines: [
          "Resource Management",
          "Time Management",
          "Scope Management"
        ],
        deliverables: [
          {
            deliverable_title: "Proposal",
            deliverable_url: "",
            deliverable_thumb_url: ""
          },
          {
            deliverable_title: "Budget",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "Proposal",
            tool_url: require("../assets/phase_1/Proposal_Template.doc"),
            tool_thumb_url: ""
          },
          {
            tool_title: "Budget",
            tool_url: require("../assets/phase_1/Proposal_Budget_Template.xlsx"),
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "Proposal - Philippines Delegation",
            tool_example_url: require("../assets/phase_1/Proposal_Template.doc"),
            tool_example_thumb_url: ""
          },
          {
            tool_example_title: "Budget - Philippines Delegation",
            tool_example_url: require("../assets/phase_1/Proposal_Budget_Template.xlsx"),
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "AmRC Reviews Project Proposal and Project Budget",
        id: "17",
        description:
          "Is the AmRC budget template used (even if in addition to the original free-form cost estimate)? How will costs be categorized? Has the monthly breakdown been allocated realistically? Has HNS’s PMC been calculated correctly and at the correct rate?",
        timeframe: [{ small: 3, medium: 5, large: 5 }],
        disciplines: [
          "Resource Management",
          "Time Management",
          "Scope Management",
          "Stakeholder Management"
        ],
        deliverables: [
          {
            deliverable_title: "Reviewed Proposal",
            deliverable_url: "",
            deliverable_thumb_url: ""
          },
          {
            deliverable_title: "Reviewed Budget",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name:
          "HNS Incorporates Comments into Project Proposal and Project Budget",
        id: "18",
        description:
          "Are comments reasonable and valid given the context? What are options for addressing the comments?",
        timeframe: [{ small: 1, medium: 2, large: 3 }],
        disciplines: [
          "Resource Management",
          "Time Management",
          "Scope Management",
          "Stakeholder Management"
        ],
        deliverables: [
          {
            deliverable_title: "Finalized Proposal",
            deliverable_url: "",
            deliverable_thumb_url: ""
          },
          {
            deliverable_title: "Finalized Budget",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      }
    ]
  },
  {
    name: "Project Setup",
    id: "2",
    description:
      "Per the PMD Pro Guide, “[Project Set Up is the phase in which] the project is officially authorized and its overall parameters are defined and communicated to the main project stakeholders.  It also during this phase that the project team establishes the high-level project governance structure” (Page 18).",
    resources: [
      {
        name: "AmRC Drafts Project Charter",
        id: "1",
        description:
          "What is the overall timeline associated with this project?  What amount of time needs to be included for project setup and, later on, project closeout?  Who will have authority to make what decisions related to the project? What resources – human, material, and financial – are required to implement the project, and from where will those resources originate (e.g., Philippine RC, American RC, other partners)?  Have reporting timelines been discussed and incorporated into the charter accordingly? Is the final report submission deadline realistic/reasonable? What type of agreement will be used to establish the charter for this project (per American RC policies)? Have the budget amendment thresholds and ARC approval trigger thresholds been considered and incorporated into the charter accordingly?",
        timeframe: [{ small: 1, medium: 3, large: 3 }],
        disciplines: ["Scope Management", "Stakeholder Management"],
        deliverables: [
          {
            deliverable_title: "Draft Project Charter",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Reviews Draft Project Charter ",
        id: "2",
        description:
          "What is the overall timeline associated with this project?  What amount of time needs to be included for project setup and, later on, project closeout?  Who will have authority to make what decisions related to the project? What resources – human, material, and financial – are required to implement the project, and from where will those resources originate (e.g., Philippine RC, American RC, other partners)?  Have reporting timelines been discussed and incorporated into the charter accordingly? Is the final report submission deadline realistic/reasonable?",
        timeframe: [{ small: 1, medium: 3, large: 5 }],
        disciplines: ["Scope Management", "Stakeholder Management"],
        deliverables: [
          {
            deliverable_title: "Reviewed Draft Project Charter",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "AmRC Incorporates Comments into Draft Project Charter",
        id: "3",
        description:
          "What comments were provided? Are the comments valid? What implication to the comments have on project?",
        timeframe: [{ small: 1, medium: 3, large: 3 }],
        disciplines: ["Scope Management", "Stakeholder Management"],
        deliverables: [
          {
            deliverable_title: "Finalized Project Charter",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Approves Project Charter",
        id: "4",
        description:
          "Is the project charter approved by the required HNS persons?",
        timeframe: [{ small: 2, medium: 5, large: 10 }],
        disciplines: ["Scope Management", "Stakeholder Management"],
        deliverables: [
          {
            deliverable_title: "Signed Project Charter",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "AmRC Approves Project Charter",
        id: "5",
        description:
          "Is the project charter approved by the required AmRC persons?",
        timeframe: [{ small: 2, medium: 5, large: 10 }],
        disciplines: ["Scope Management", "Stakeholder Management"],
        deliverables: [
          {
            deliverable_title: "Signed Project Charter",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      }
    ]
  },
  {
    name: "Project Planning",
    id: "3",
    description:
      "Per the PMD Pro Guide, “[Project Set Up is the phase in which] the project is officially authorized and its overall parameters are defined and communicated to the main project stakeholders.  It also during this phase that the project team establishes the high-level project governance structure” (Page 18).",
    resources: [
      {
        name: "HNS and AmRC Hold Project Launch Meeting",
        id: "1",
        description:
          "What terms require confirmation and/or clarification (e.g., reporting requirements and templates)?  To what extent do all key personnel within both Philippine RC and American RC have a common understanding of all requirements and the process for addressing questions as they arise during implementation? What work can Philippine RC personnel do to prepare for the start of project implementation while the charter approval process is underway?  What additional, more detailed planning may be required in order to ensure a smooth start to the project?  Who needs to be involved in this process?",
        timeframe: [{ small: 1, medium: 1, large: 1 }],
        disciplines: ["Risk Management", "Stakeholder Management"],
        deliverables: [
          {
            deliverable_title: "RACI Workplan",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS and AmRC Communicate the Project Launch",
        id: "2",
        description:
          "Who needs to be informed about the formal launch of the project?  How will this information be communicated to them?",
        timeframe: [{ small: 1, medium: 1, large: 1 }],
        disciplines: ["Stakeholder Management"],
        deliverables: [
          {
            deliverable_title: "",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Develops a Detailed Workplan",
        id: "3",
        description:
          "When are activities expected to take place? What order do activites need to occur? Who is accountable for each activity?",
        timeframe: [{ small: 5, medium: 10, large: 15 }],
        disciplines: ["Time Management", "Resource Management"],
        deliverables: [
          {
            deliverable_title: "Detailed Workplan",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "Workplan",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "Workplan - Philippines Delegation",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Develops a Detailed Budget",
        id: "4",
        description:
          "What costs are expected to occur and when? Who is accountable for each budget line item? How will money flow between the delegation and the project?",
        timeframe: [{ small: 5, medium: 10, large: 15 }],
        disciplines: ["Risk Management", "Resource Management"],
        deliverables: [
          {
            deliverable_title: "Budget",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Develops a Detailed Monitoring and Evaluation Plan",
        id: "5",
        description:
          "How will progress be measured? How is accountable for collection and analysis of data? How frequently should data be collected?",
        timeframe: [{ small: 5, medium: 5, large: 10 }],
        disciplines: ["Scope Management"],
        deliverables: [
          {
            deliverable_title: "Monitoring and Evaluation Plan",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "Monitoring and Evaluation Plan",
            tool_url: require("../assets/phase_3/Project_M&E_Plan_Template.xlsx"),
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title:
              "Monitoring and Evaluation Plan - Philippines Delegation",
            tool_example_url: require("../assets/phase_3/Project_M&E_Plan_Template.xlsx"),
            tool_example_thumb_url: ""
          }
        ]
      }
    ]
  },
  {
    name: "Project Implementation",
    id: "4",
    description:
      "Per the PMD Pro Guide, “The day-to-day work of project implementation is to lead and manage the application of the project implementation plan: leading the team, dealing with issues, managing the project team and creatively integrating the different elements of the project plan” (Page 19).  This can be a relatively simple process or incredibly complex, depending on the project, and the individuals and teams involved with managing the project must be ready to deal with unexpected changes in context, setbacks or opportunities which arise.  The PMD Pro guidance summarizes the work in this phase of the project management cycle as, “managing issues, managing people and managing internal controls” (Page 53).  Another framework through which to view this phase of project management is ensuring that the project stays on time, scope and budget.",
    resources: [
      {
        name: "HNS Establishes System for Managing Project Decisions",
        id: "1",
        description:
          "What systems are in place to log and communicate major project decisions that affect project implementation?",
        timeframe: [{ small: 5, medium: 10, large: 15 }],
        disciplines: ["Risk Management", "Resource Management"],
        deliverables: [
          {
            deliverable_title: "Decisions Log",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "Decisions Log",
            tool_url: require("../assets/phase_4/Project_Decisions_Log_Template.xlsx"),
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "Decisions Log - Philippines Delegation",
            tool_example_url: require("../assets/phase_4/Project_Decisions_Log_Template.xlsx"),
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Establishes System for Managing Project Issues",
        id: "2",
        description:
          "What systems are in place to identify and manage issues which inhibit project implementation?  Once issues are identified, how are they analyzed and addressed?  How are issues reported?  For what audiences, and on what timeline?",
        timeframe: [{ small: 5, medium: 10, large: 15 }],
        disciplines: ["Risk Management", "Resource Management"],
        deliverables: [
          {
            deliverable_title: "Issues Log",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "Issues Log",
            tool_url: require("../assets/phase_4/Project_Issues_Log_Template.xlsx"),
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "Decision Log - Philippines Delegation",
            tool_example_url: require("../assets/phase_4/Project_Issues_Log_Template.xlsx"),
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name:
          "HNS Establishes System for Managing Project Staff and Volunteers",
        id: "3",
        description:
          "What is the structure of management for the project? What is the process for hiring/firing staff? What What performance improve measures are in place for staff improvement? How is staff performance measured and assessed? What approaches do project manager(s) use to manage the project teams?  How do the managers balance “hard skills” and “soft skills” when it comes to management?  How will team members communicate with each other?  About what, and how frequently?  What mechanisms will the team use to engage with one another? How is staff security ensured? Have job descriptions been developed? Has an organizational chart been developed?",
        timeframe: [{ small: 30, medium: 60, large: 90 }],
        disciplines: [
          "Risk Management",
          "Resource Management",
          "Stakeholder Management"
        ],
        deliverables: [
          {
            deliverable_title: "Timesheet",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "Timesheet",
            tool_url: require("../assets/phase_4/Project_Timesheet_Template.xlsx"),
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "Timesheet - Philippines Delegation",
            tool_example_url: require("../assets/phase_4/Project_Timesheet_Template.xlsx"),
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Establishes System for Managing Internal Controls",
        id: "4",
        description:
          "What systems are in place to manage the procurement of materials? What systems are in place to manage project finances? What systems are in place to manage project assets? What systems are in place to manage the movement of project assets and people?  What steps must the project team take to ensure that they remain compliant with relevant Philippine RC and American RC systems and requirements (e.g., around financial management, HR, fleet management, logistics, grant management)?",
        timeframe: [{ small: 30, medium: 60, large: 90 }],
        disciplines: ["Risk Management", "Resource Management"],
        deliverables: [
          {
            deliverable_title: "",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      }
    ]
  },
  {
    name: "Project Monitoring, Evaluation, and Control",
    id: "5",
    description:
      "Per the PMD Pro Guide, “This phase extends throughout the entire life of the project and continually measures the project’s progress and identifies appropriate corrective actions in situations where the project’s performance deviates significantly from the plan” (Page 19).  This work allows the project to keep track of what is working and what is not working, challenge assumptions in the project design, identify changes to the project’s context, and synthesize all of that information into decisions regarding changes to the project and its approach.  Such changes will almost certainly be required in order to achieve the project’s goal and objectives.  Iterative learning cycles depend upon a steady stream of data and analysis of that data.  Project monitoring tends to focus on the activities, outputs and day-to-day work of the project.  Project evaluation focuses more on the project’s outcome-level aims and whether progress is being made against those targets.  Taken together, these two information sources enable the project personnel to know whether or not they are achieving their goal.",
    resources: [
      {
        name: "HNS Establishes System for Project Monitoring and Evaluation",
        id: "1",
        description:
          "What data is being collected for M&E purposes?  From what sources does the data originate? What methodologies are used to gather the data? What is the mixture of qualitative and quantitative data?  How high is the quality of that data?  What is the process for analyzing the data and drawing conclusions? How is the data managed?",
        timeframe: [{ small: 10, medium: 15, large: 20 }],
        disciplines: ["Scope Management"],
        deliverables: [
          {
            deliverable_title: "",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name: "HNS Establishes System for Project Reporting",
        id: "2",
        description:
          "How is the data presented back to HNS and American RC through the relevant reporting templates? Who is provided this data? ",
        timeframe: [{ small: 10, medium: 15, large: 20 }],
        disciplines: ["Scope Management"],
        deliverables: [
          {
            deliverable_title: "",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name:
          "HNS and AmRC Establish System for Collaborative Review Based on Monitoring Data",
        id: "3",
        description:
          "How does the project’s performance compare to its planned time, scope and budget?  To what extent is the project proceeding as planned?  Is the budget still realistic? Have there been any delays that will delay the costs/expenses or project activities? What corrective actions, if any, are necessary? What is working well in the project?  What are the successes in terms of processes or outputs? How do the data and conclusions from the data inform the next steps in project management and/or iteration of the project design?",
        timeframe: [{ small: 10, medium: 15, large: 20 }],
        disciplines: ["Scope Management", "Stakeholder Management"],
        deliverables: [
          {
            deliverable_title: "",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name:
          "HNS Provides Financial and Narrative Reports to AmRC per Project Charter",
        id: "4",
        description:
          "What are the reporting requirements as laid out in the project charter?  What templates are mandated for this project?  What information and/or supporting documentation is necessary to complete the templates and general reporting requirements?  When are the reporting deadlines?  What steps are necessary to ensure that the report is both sufficiently detailed and accurate?  Who is involved with generating and approving the reports prior to submission to American RC?  What is the feedback process from American RC?  Who is responsible for reviewing and approving the reports within American RC?",
        timeframe: [{ small: 10, medium: 15, large: 20 }],
        disciplines: ["Risk Management"],
        deliverables: [
          {
            deliverable_title: "",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name:
          "AmRC Reviews Financial and Narrative Reports",
        id: "5",
        description:
          "Is the narrative clear and easily understood? What statements need additional comment? Are the financial reports accurate and valid?",
        timeframe: [{ small: 1, medium: 2, large: 3 }],
        disciplines: ["Risk Management"],
        deliverables: [
          {
            deliverable_title: "",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name:
          "HNS Incorporates Comments into Financial and Narrative Reports",
        id: "6",
        description:
          "Are comments reasonable and valid given the context? What are options for addressing the comments?",
        timeframe: [{ small: 1, medium: 2, large: 3 }],
        disciplines: ["Risk Management"],
        deliverables: [
          {
            deliverable_title: "",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      }
    ]
  },
  {
    name: "Project Transition",
    id: "6",
    description:
      "Per the PMD Pro Guide, “This phase includes implementing all of the transition activities that occur at the end of a project, including (but not limited to) confirming the deliverables with beneficiaries, collecting lessons learned, and completing the administrative, financial and contractual closure activities” (Page 19).  While the majority of the activities associated with this phase may take place at the end of the project, planning for transition should begin at the earliest stages of the project (e.g., identifying maintenance plans for infrastructure, funding sources for continuing project activities).  Generally, the shape of this phase can be rooted in one of four scenarios: Termination – Formal closure, including any handover to local partners, institutions or communities; Extension – Negotiating added time to finish the project; Expansion – Identification of elements for replication with a new target area or population; Redesign – Continuation via a new phase with modified interventions or activities. The activities necessary during this phase are heavily dependent upon which of these scenarios the project will pursue.",
    resources: [
      {
        name:
          "HNS Develops Transition Plan (if required)",
        id: "1",
        description:
          "With which scenario will the project align – Termination, Extension, Expansion or Redesign?  Who must be included in the conversations to determine the scenario?  Who has the power to authorize the scenario (both within Philippine RC and American RC)?",
        timeframe: [{ small: 10, medium: 15, large: 20 }],
        disciplines: ["Risk Management"],
        deliverables: [
          {
            deliverable_title: "",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name:
          "HNS and AmRC Collaboratively Conduct End of Project Learning Activities (if required)",
        id: "2",
        description:
        "What are the critical lessons from this project which could be used to influence future projects in the Philippines and/or elsewhere around the world? What documentation must the project personnel produce?  What additional documentation might be useful for future projects? What did we set out to do? What did we achieve? What went really well? Why did it go well? What could have gone better? Compare the plan to reality. What prevented us from doing more?",
        timeframe: [{ small: 10, medium: 15, large: 20 }],
        disciplines: ["Risk Management"],
        deliverables: [
          {
            deliverable_title: "",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name:
          "HNS Closes Outstanding Contracts",
        id: "3",
        description:
        "What are the relevant Philippine RC and American RC policies and procedures which must be followed at the end of the project regarding disposition of assets?  Are all contracts closed out? Suppliers? Sub-contractors? Donors? Others? Implementing organizations? Has the donor reviewed and accepted project deliverables?",
        timeframe: [{ small: 10, medium: 15, large: 20 }],
        disciplines: ["Risk Management"],
        deliverables: [
          {
            deliverable_title: "",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name:
          "HNS Closes Outstanding Financial Transactions",
        id: "4",
        description:
        "Has all permitted funding been received from the donor? Have all receivables (project advances, travel advances, and advances to suppliers) been liquidated or transferred to another project number or accounting code? Have all payables been paid?  Has the final financial report been compiled and submitted?",
        timeframe: [{ small: 10, medium: 15, large: 20 }],
        disciplines: ["Risk Management"],
        deliverables: [
          {
            deliverable_title: "",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name:
          "HNS Closes Outstanding Administrative Obligations",
        id: "5",
        description:
        "What are the relevant Philippine RC and American RC policies and procedures which must be followed regarding closing of contracts? Have project personnel been released or reassigned? Have the project equipment, vehicles, offices been reallocated/sold/transferred? Are project reports and closure documents complete? Are project archives and/or files up to date?",
        timeframe: [{ small: 10, medium: 15, large: 20 }],
        disciplines: ["Risk Management"],
        deliverables: [
          {
            deliverable_title: "",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      },
      {
        name:
          "HNS Communicates Project Closure",
        id: "6",
        description:
        "What events, celebrations and/or communication will mark the project closing?  Who will be involved? What contributions have key stakeholders made to the project? What project accomplishments deserve recognition?",
        timeframe: [{ small: 1, medium: 1, large: 1 }],
        disciplines: ["Stakeholder Management"],
        deliverables: [
          {
            deliverable_title: "",
            deliverable_url: "",
            deliverable_thumb_url: ""
          }
        ],
        tool: [
          {
            tool_title: "",
            tool_url: "",
            tool_thumb_url: ""
          }
        ],
        tool_example: [
          {
            tool_example_title: "",
            tool_example_url: "",
            tool_example_thumb_url: ""
          }
        ]
      }
    ]
  }
];


function Resource({ match }) {
    const topic = topics
      .find(({ id }) => id === match.params.topicId)
      .resources.find(({ id }) => id === match.params.subId);
    return (
      <div>
        <hr />
        <h2>
          {"Step " + topic.id + ": "}
          {topic.name}
        </h2>
        <h3>Description</h3>
        <p>{topic.description}</p>
        <h3>Disciplines</h3>
        <ul>
          {topic.disciplines.map(sub => (
            <li>{sub}</li>
          ))}
        </ul>
        <h3>Expected Timeframe</h3>
        {topic.timeframe.map(sub => (
          <ul>
            <li>{"Small: " + sub.small + " days"}</li>
            <li>{"Medium: " + sub.medium + " days"}</li>
            <li>{"Large: " + sub.large + " days"}</li>
          </ul>
        ))}
  
        <h3>Expected Deliverables</h3>
        <ul>
          {topic.deliverables.map(sub => (
            <li>{sub.deliverable_title}</li>
          ))}
        </ul>
        <h3>Tools</h3>
        <ul>
          {topic.tool.map(sub => (
            <li>
              <a id="download_link" href={sub.tool_url}>
                {sub.tool_title + " (Download)"}
              </a>
            </li>
          ))}
        </ul>
        <h3>Tools Examples</h3>
        <ul>
          {topic.tool_example.map(sub => (
            <li>
              <a id="download_link" href={sub.tool_example_url}>
                {sub.tool_example_title + " (Download)"}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default Resource;
