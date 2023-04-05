import React from "react";

const Contact = () => {
  return (
    <div className="contact_container" id="contact">
      <div className="contact_info">
        <div className="contact_heading">CONTACT</div>
        <div className="contact_headline">Don't be shy! Hit me up!</div>
        <div className="contact_details">
          <div className="contact_location">
            <img className="location_icon" src="https://icones.pro/wp-content/uploads/2021/04/icones-de-localisation-de-la-carte-violette.png"></img>
            <div className="location_info cont__info">
                Hyderabad, India
            </div>
          </div>
          <div className="mail">
            <img className="mail_icon" src="https://www.citypng.com/public/uploads/preview/mail-email-address-round-outline-purple-icon-free-png-11637079456z8a1ruhwff.png"></img>
            <div className="mail_info cont__info">chkrdhrprdhn@gmail.com</div>
          </div>
          <div className="cont_linkein">
            <img className="cont_linkein_icon" src="data:image/png;base64,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"></img>
            <div className="cont_linkein_info cont__info">/chakra-hub</div>
          </div>
        </div>
      </div>
      <div className="copyright">
      &#169; Chakradhar Pradhan |&nbsp;<a href="jhjk"> Source code</a> 
      </div>
    </div>
  );
};

export default Contact;
