
import React from 'react';
import { Link } from 'react-scroll';
import Layout from '../components/Layout';

const Bylaws = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Bylaws</h1>
          
          <div className="mb-8 flex justify-center">
            <a 
              href="https://drive.google.com/file/d/1pda5K7CN-ZEWpnsDkmMG6n-V2qloJsXn/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="/lovable-uploads/47c89f2a-8557-413d-9180-1c06dcf9309e.png"
                alt="Bylaws Document Preview"
                className="w-[595px] max-w-full h-[800px] shadow-lg rounded-lg hover:opacity-80 transition-opacity"
                width="595"
                height="800"
              />
            </a>
          </div>

          <div className="space-y-8 text-gray-700">
            <section id="summary">
              <h2 className="text-2xl font-semibold mb-4">Summary</h2>
              <p className="mb-6 text-gray-600 italic">
                The following is a summary of our bylaws for quick reference. This summary is not legally binding. 
                Please refer to the complete bylaws document for detailed and legally binding information.
              </p>
              
              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li><Link to="governance" smooth={true} className="text-blue-600 hover:underline cursor-pointer"><strong>Governance & Membership Structure</strong></Link>: The General Assembly, composed of Community and Supporting Members, holds exclusive voting rights, including electing and removing directors, amending bylaws, and overseeing financial transparency standards</li>
                <li><Link to="board" smooth={true} className="text-blue-600 hover:underline cursor-pointer"><strong>Board Structure & Elections</strong></Link>: The board consists of 3 to 15 directors elected by the General Assembly for staggered three-year terms, with committees like the Nomination and Executive Committees supporting governance and operations</li>
                <li><Link to="roles" smooth={true} className="text-blue-600 hover:underline cursor-pointer"><strong>Roles & Responsibilities</strong></Link>: Officers include the President, Secretary, Treasurer, and Executive Director, who acts as the chief executive, overseeing strategy, operations, and compliance under board supervision</li>
                <li><Link to="meetings" smooth={true} className="text-blue-600 hover:underline cursor-pointer"><strong>Meetings & Decision-Making</strong></Link>: The board and General Assembly meet regularly, with provisions for remote participation, quorum requirements, and written consents for decision-making</li>
                <li><Link to="financial" smooth={true} className="text-blue-600 hover:underline cursor-pointer"><strong>Financial & Legal Matters</strong></Link>: The bylaws outline membership dues, financial oversight, indemnification policies, and conflict-of-interest provisions to ensure ethical and legal compliance</li>
              </ul>
            </section>

            <section id="governance">
              <h2 className="text-xl font-semibold mb-4">Governance & Membership Structure</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Membership Structure</strong>: The General Assembly consists of two classes—Community Members, who directly use transparent financial ledgers, and Supporting Members, who support the mission but do not undergo certification</li>
                <li><strong>Voting & Decision-Making</strong>: Only members have voting rights, with Community Members receiving votes based on their membership tier and Supporting Members collectively limited to one-third of the total voting power</li>
                <li><strong>Election & Oversight</strong>: The General Assembly exclusively elects and removes directors, amends bylaws, and establishes financial transparency standards, ensuring community-led governance</li>
                <li><strong>Meetings & Participation</strong>: The General Assembly holds annual and special meetings, with remote participation allowed, and decisions requiring a quorum of at least one-third of both members and voting power</li>
                <li><strong>Membership Obligations</strong>: Members must adhere to transparency standards, pay annual dues, and follow conduct policies, with non-compliance leading to potential removal by majority vote</li>
              </ul>
            </section>

            <section id="board">
              <h2 className="text-xl font-semibold mb-4">Board Structure & Elections</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Board Composition</strong>: The board consists of 3 to 15 directors, with the exact number set by the General Assembly to ensure effective governance and representation</li>
                <li><strong>Election Process</strong>: Directors are elected by a majority vote of the General Assembly members present or represented by proxy at a meeting, ensuring community-driven leadership</li>
                <li><strong>Term Length & Staggering</strong>: Directors serve three-year terms, with initial terms adjusted as needed to maintain a staggered board where terms expire evenly over time</li>
                <li><strong>Filling Vacancies</strong>: If a board seat becomes vacant, the remaining directors may appoint a temporary replacement until the General Assembly elects a new director</li>
                <li><strong>Removal & Resignation</strong>: Directors may resign at any time or be removed by a majority vote of the General Assembly, allowing accountability and adaptability in board leadership</li>
              </ul>
            </section>

            <section id="roles">
              <h2 className="text-xl font-semibold mb-4">Roles & Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Board Oversight</strong>: The Board of Directors manages the organization's affairs, except for powers reserved for the General Assembly, ensuring strategic direction and governance</li>
                <li><strong>Executive Director Leadership</strong>: The Executive Director serves as the chief executive, overseeing daily operations, strategy, compliance, and financial management under board supervision</li>
                <li><strong>Officer Roles</strong>: The board elects key officers, including the President, who leads board meetings; the Secretary, who maintains records; and the Treasurer, who oversees financial matters</li>
                <li><strong>Committees for Governance</strong>: The board establishes committees, such as the Nomination Committee, which recommends director candidates, and the Executive Committee, which implements board policies</li>
                <li><strong>Director & Officer Accountability</strong>: Directors and officers must act in the organization's best interest, adhere to conflict-of-interest policies, and may be removed by the General Assembly or board if necessary</li>
              </ul>
            </section>

            <section id="meetings">
              <h2 className="text-xl font-semibold mb-4">Meetings & Decision-Making</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Annual & Special Meetings</strong>: The General Assembly holds an annual meeting to elect directors and address key matters, while special meetings can be called by the Executive Director, President, board, or a majority of members</li>
                <li><strong>Notice & Participation</strong>: Meeting notices must be sent at least 10 days in advance, specifying the time, location, and remote participation options to ensure accessibility</li>
                <li><strong>Quorum Requirements</strong>: A quorum requires at least one-third of both the total membership and voting power to be present for decisions to be valid</li>
                <li><strong>Remote & Proxy Voting</strong>: Members can participate via teleconference, electronic means, or through Delegates and proxies assigned within their organization</li>
                <li><strong>Written Consent Decisions</strong>: The General Assembly and board may take action without a meeting if a majority provides written or electronic consent, ensuring flexibility in decision-making</li>
              </ul>
            </section>

            <section id="financial">
              <h2 className="text-xl font-semibold mb-4">Financial & Legal Matters</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Membership Dues</strong>: Members pay annual dues based on their tier, with Community Member fees varying by organizational size and Supporting Member fees set by the General Assembly</li>
                <li><strong>Financial Oversight</strong>: The Treasurer oversees financial management, while the board ensures responsible budgeting, spending, and compliance with financial transparency standards</li>
                <li><strong>Indemnification & Liability Protection</strong>: Directors and officers are indemnified against legal claims related to their duties, and members are not personally liable for the organization's debts</li>
                <li><strong>Conflict of Interest Policy</strong>: Directors and officers must disclose potential conflicts, and transactions involving them require board approval to ensure ethical governance</li>
                <li><strong>Amendments & Compliance</strong>: Only the General Assembly can amend the bylaws, and the organization operates under Delaware law, ensuring legal compliance and governance stability</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Bylaws;
