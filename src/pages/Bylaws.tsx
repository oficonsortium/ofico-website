
import React from 'react';
import { Link } from 'react-scroll';

const Bylaws = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Bylaws</h1>
        
        <div className="mb-8 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
            alt="Bylaws Document Preview"
            className="w-full max-w-[595px] h-auto shadow-lg rounded-lg"
          />
        </div>

        <div className="space-y-8 text-gray-700">
          <section id="summary">
            <h2 className="text-2xl font-semibold mb-4">Summary</h2>
            <p className="mb-6 text-gray-600 italic">
              The following is a summary of our bylaws for quick reference. This summary is not legally binding. 
              Please refer to the complete bylaws document for detailed and legally binding information.
            </p>
            
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li><Link to="governance" smooth={true} className="text-blue-600 hover:underline cursor-pointer">Governance & Membership Structure</Link></li>
              <li><Link to="board" smooth={true} className="text-blue-600 hover:underline cursor-pointer">Board Structure & Elections</Link></li>
              <li><Link to="roles" smooth={true} className="text-blue-600 hover:underline cursor-pointer">Roles & Responsibilities</Link></li>
              <li><Link to="meetings" smooth={true} className="text-blue-600 hover:underline cursor-pointer">Meetings & Decision-Making</Link></li>
              <li><Link to="financial" smooth={true} className="text-blue-600 hover:underline cursor-pointer">Financial & Legal Matters</Link></li>
            </ul>
          </section>

          <section id="governance">
            <h2 className="text-xl font-semibold mb-4">Governance & Membership Structure</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Membership categories: Individual, Corporate, and Honorary members</li>
              <li>Annual membership renewal and fee structure</li>
              <li>Rights and privileges of different membership types</li>
              <li>Membership application and approval process</li>
              <li>Grounds for membership termination or suspension</li>
            </ul>
          </section>

          <section id="board">
            <h2 className="text-xl font-semibold mb-4">Board Structure & Elections</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Board composition of 7-11 directors</li>
              <li>Two-year terms with staggered elections</li>
              <li>Nomination and election procedures</li>
              <li>Qualification requirements for board positions</li>
              <li>Process for filling board vacancies</li>
            </ul>
          </section>

          <section id="roles">
            <h2 className="text-xl font-semibold mb-4">Roles & Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Duties of the Board Chair and Vice-Chair</li>
              <li>Secretary's responsibilities for record-keeping</li>
              <li>Treasurer's financial oversight duties</li>
              <li>Committee structure and leadership</li>
              <li>Executive Director's role and authority</li>
            </ul>
          </section>

          <section id="meetings">
            <h2 className="text-xl font-semibold mb-4">Meetings & Decision-Making</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Annual general meeting requirements</li>
              <li>Board meeting frequency and quorum</li>
              <li>Virtual meeting protocols</li>
              <li>Voting procedures and majority requirements</li>
              <li>Emergency meeting provisions</li>
            </ul>
          </section>

          <section id="financial">
            <h2 className="text-xl font-semibold mb-4">Financial & Legal Matters</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fiscal year definition and budget process</li>
              <li>Financial reporting requirements</li>
              <li>Audit procedures and controls</li>
              <li>Investment policy guidelines</li>
              <li>Amendment procedures for bylaws</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Bylaws;
