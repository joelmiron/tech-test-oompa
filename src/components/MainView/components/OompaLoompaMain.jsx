


const OompaLoompaMain = ({ id, image, firstName, lastName,gender,profession}) =>{

return(<div key={id} className="oompaLoompaContent">
   <img alt="OompaImage" src={image} /> 
   <div>
<div className="name">{firstName} {lastName}</div>
<div className="gender">{gender === "F" ? "Female" : "Male"}</div>
<div className="profession">{profession}</div>
</div>
</div>)


}

export default OompaLoompaMain