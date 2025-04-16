import React from 'react';
import { Link } from 'react-scroll';
import Layout from '../components/Layout';

const Bylaws = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Bylaws</h1>
          
          <div className="space-y-6 text-gray-700">
            <section id="article1">
              <h2 className="text-xl font-semibold mb-4">Article 1: Name</h2>
              <p className="mb-4">
                The name of this organization shall be Open Finance Consortium Inc.
              </p>
            </section>

            <section id="article2">
              <h2 className="text-xl font-semibold mb-4">Article 2: Purpose</h2>
              <p className="mb-4">
                The purpose of Open Finance Consortium Inc. is to promote and develop open standards and technologies in the financial industry.
              </p>
            </section>

            <section id="article3">
              <h2 className="text-xl font-semibold mb-4">Article 3: Membership</h2>
              <p className="mb-4">
                Membership in the Consortium is open to organizations and individuals interested in supporting its purpose.
              </p>
            </section>

            <section id="article4">
              <h2 className="text-xl font-semibold mb-4">Article 4: Governance</h2>
              <p className="mb-4">
                The Consortium shall be governed by a Board of Directors elected by the members.
              </p>
            </section>

            <section id="article5">
              <h2 className="text-xl font-semibold mb-4">Article 5: Amendments</h2>
              <p className="mb-4">
                These bylaws may be amended by a two-thirds vote of the members.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <ul className="list-none pl-0 mb-4 space-y-2">
                <li>
                  <Link to="article1" smooth={true} duration={500} className="text-blue-500 hover:underline">
                    Article 1: Name
                  </Link>
                </li>
                <li>
                  <Link to="article2" smooth={true} duration={500} className="text-blue-500 hover:underline">
                    Article 2: Purpose
                  </Link>
                </li>
                <li>
                  <Link to="article3" smooth={true} duration={500} className="text-blue-500 hover:underline">
                    Article 3: Membership
                  </Link>
                </li>
                <li>
                  <Link to="article4" smooth={true} duration={500} className="text-blue-500 hover:underline">
                    Article 4: Governance
                  </Link>
                </li>
                <li>
                  <Link to="article5" smooth={true} duration={500} className="text-blue-500 hover:underline">
                    Article 5: Amendments
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Bylaws;
