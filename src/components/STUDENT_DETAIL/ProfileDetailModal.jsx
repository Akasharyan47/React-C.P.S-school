import React from 'react';

const ProfileDetailModal = ({ details, onClose }) => {
  return (
    <div className="modal   show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      {/* Modal content */}
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header  d-flex  bg-dark text-light">
            <h3 className="modal-title w-100 text-align-center">Profile Details</h3>

            <button type="button" className="close text-light mr-auto " onClick={onClose} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>

          </div>
          <div className="modal-body PDli">
            <ul>
              <li>
                <strong>Name:</strong> {details.name}
              </li>
              <li>
                <strong>Designation:</strong> {details.designation}
              </li>
              <li>
                <strong>Date of Birth:</strong> {details.dob}
              </li>
              <li>
                <strong>Email:</strong> {details.email}
              </li>
              <li>
                <strong>Contact Number:</strong> {details.contactNumber}
              </li>
              <li>
                <strong>Location:</strong> {details.location}
              </li>
              <li>
                <strong>Profile:</strong>  
              </li>
              <li>
                 {details.profile}
              </li>

              <li>
                <strong>Education Details:</strong>
                <ul>
                  {details.educationDetails.map((edu, index) => (
                    <li key={index}>  
                      {edu.degree} from {edu.institution}  
                    </li> 
                  ))}
                </ul>
              </li>
              <li>
                <strong>Address:</strong> {details.address.area}
              </li>
              <li>
                <strong>Hobbies:</strong> {details.hobbies}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailModal;
