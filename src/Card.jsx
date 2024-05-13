import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Card from 'react-bootstrap/Card';
import Pagination from "react-bootstrap/Pagination";

function BlogImage() {
  return (
    "Src= Path to Image"
  )
}

function BlogTitle() {
  return (
    "Blog Title"
  )
}

function BlogQuote() {
  return (
    "Blog Quote"
  )
}

function CardTemplate() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={BlogImage} />
      <Card.Body>

        <Card.Title>
          <BlogTitle />
        </Card.Title>

        <Card.Subtitle className="mb-2 text-muted">
          <BlogQuote />
        </Card.Subtitle>

        <Card.Text>
          {/* <BlogContent /> */}
        </Card.Text>
        
        <Card.Link href="#">Read More Here...</Card.Link>
      </Card.Body>
    </Card>
  );
}


function Blog() {
  return (
      <div className="p-5">
      <h1>Blog Page</h1>
      <CardTemplate />
    </div>
  );
}

export default Blog;
