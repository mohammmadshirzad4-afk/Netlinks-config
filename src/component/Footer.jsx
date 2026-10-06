import React from 'react'

export const Footer = () => {
  return (
    <div>
      <div className="mt-15 flex  gap-10  px-5">
        <hr className="text-gray-200 mb-15" />
        <div className="flex flex-col gap-5 w-100 text-gray-500">
          <img
            className="w-30"
            src="https://netlinks.af/_astro/logo.DUySRYvR_2j5iRN.avif"
            alt="NETLINKS"
          />
          <p className="">
            {" "}
            A global technology partner for Odoo ERP implementation, custom
            software development, AI automation, and digital transformation
          </p>

          <p>info@netlinks.af</p>
          <p>077-302-0101</p>
          <p>NETLINKS Plaza, Street 6, Lane 3, Shar-e-naw</p>
          <p>Kabul, Afghanistan</p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-400">SOLUTIONS</h3>
          <a href="#">CRM</a>
          <a href="#">Sales management</a>
          <a href="#">Point of sales</a>
          <a href="#">Accounting</a>
          <a href="#">Inventory</a>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-gray-400">SERVICES</h3>
          <a href="#">Odoo ERP services</a>
          <a href="#">Custom software</a>
          <a href="#">AI & atuomation</a>
          <a href="#">IT staff augmention</a>
          <a href="#">Digital transformation</a>
          <a href="#">Cloud & managed</a>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-400">INDUSTRIES</h3>
          <a href="#">Manufacturing</a>
          <a href="#">Retail & e-commerce</a>
          <a href="#">Trades & field services</a>
          <a href="#">Professional services</a>
          <a href="#">Nonprofits</a>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-400">COMPANY</h3>
          <a href="#">About</a>
          <a href="#">Customer</a>
          <a href="#">Service ereas</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">NETLINKS US</a>
        </div>
      </div>
      <hr className='mt-10 text-gray-400' />
      <div className='place-content-between flex mx-5 my-7'>
        <p className='text-gray-500 '>© 2026 NETLINKS. All rights reserved</p>
        <p>
          Sitemap · Business ethics · Privacy policy · Terms of use · Dark mode
        </p>
      </div>
    </div>
  );
}
