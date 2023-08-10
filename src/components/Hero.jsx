// import { Container, Card, Button } from 'react-bootstrap';

// const Hero = () => {
//   return (
//     <div className=' py-5'>
//       <Container className='d-flex justify-content-center'>
//         <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
//           <h1 className='text-center mb-4'>MERN Authentication</h1>
//           <p className='text-center mb-4'>
//             This is a boilerplate for MERN authentication that stores a JWT in
//             an HTTP-Only cookie. It also uses Redux Toolkit and the React
//             Bootstrap library
//           </p>
//           <div className='d-flex'>
//             <Button variant='primary' href='/login' className='me-3'>
//               Sign In
//             </Button>
//             <Button variant='secondary' href='/register'>
//               Register
//             </Button>
//           </div>
//         </Card>
//       </Container>
//     </div>
//   );
// };

// export default Hero;
import { Container, Card, Button } from 'react-bootstrap';
import "./post.css"
import { Link } from "react-router-dom"



const Hero = ({data}) => {
  const {avatar,title,desc,category,_id}=data
  return (
 
    <div className="post">
<img
  className="postImg"
  src={avatar}
  alt=""
/>
<div className="postInfo">
  <div className="postCats">
    <span className="postCat">
      <Link className="link" to="/posts?cat=Music" style={{textDecoration: 'none'}}>
       {category}
      </Link>
    </span>
    {/* <span className="postCat">
      <Link className="link" to="/posts?cat=Music">
        Life
      </Link>
    </span> */}
  </div>
  <span className="postTitle">
    <Link to={`/post/${_id}`} className="link" style={{textDecoration: 'none'}}>
      {title}
    </Link>
  </span>
  
</div>
<p className="postDesc">
  {desc}
</p>
</div>
  );
};

export default Hero;
