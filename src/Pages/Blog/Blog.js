import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blogs')
    return (
      <div className="m-36">
        <h2 className="text-3xl text-center">Welcome to my Blog!</h2>
        <div className="mt-10">
          <p className="text-xl">Q.Difference between SQL and NoSQL?</p>
          <h3 className="mt-2">SQL</h3>
          <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</li>
          <li>These databases have fixed or static or predefined schema</li>
          <li>These databases are not suited for hierarchical data storage.</li>
          <li>These databases are best suited for complex queries</li>
          <li>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</li>
        </div>
        <h3 className="mt-2">NoSQL</h3>
        <li>Non-relational or distributed database system.</li>
        <li>They have dynamic schema</li>
        <li>These databases are best suited for hierarchical data storage.</li>
        <li>These databases are not so good for complex queries</li>
        <li>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</li>

        <div>
          <h2 className="text-xl mt-5">Q.What is JWT, and how does it work?</h2>
          <p className="mt-2">
            JWT, Json Web Token is an open standard that defines a compact and
            self-contained way for securely transmitting information between
            parties as a JSON object. This information can be verified and
            trusted because it is digitally signed.
          </p>
          <p>
            In authentication, when the user successfully logs in using their
            credentials, a JSON Web Token will be returned. Since tokens are
            credentials, great care must be taken to prevent security issues. In
            general, you should not keep tokens longer than required. You also
            should not store sensitive session data in browser storage due to
            lack of security. Whenever the user wants to access a protected
            route or resource, the user agent should send the JWT, typically in
            the Authorization header using the Bearer schema.
          </p>
        </div>
        <div>
          <h2 className="text-xl mt-5">
            What is the difference between javascript and NodeJS?
          </h2>
          <p className="mt-2">
            1. JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node.js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language. It requires libraries that can be
            conveniently accessed from JavaScript programming to be more
            helpful. <br />
            2. Any engine may run JavaScript. As a result, writing JavaScript is
            incredibly easy, and any working environment is similar to a
            complete browser. Node.js, on the other hand, only enables the V8
            engine. Written JavaScript code, on the other hand, can run in any
            context, regardless of whether the V8 engine is supported. <br />
            3. A specific non-blocking operation is required to access any
            operating system. There are a few essential objects in JavaScript,
            but they are entirely OS-specific. Node.js, on the other hand, can
            now operate non-blocking software tasks out of any JavaScript
            programming. It contains no OS-specific constants. Node.js
            establishes a strong relationship with the system files, allowing
            companies to read and write to the hard drive. <br />
            4. The critical benefits of JavaScript include a wide choice of
            interfaces and interactions and just the proper amount of server
            contact and direct visitor input.
          </p>
        </div>

        <div>
          <h2 className='text-xl mt-5'>Q.How does NodeJS handle multiple requests at the same time?</h2>
          <p className='mt-2'>
            NodeJS receives multiple requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker threads module.
          </p>
        </div>
      </div>
    );
};

export default Blog;