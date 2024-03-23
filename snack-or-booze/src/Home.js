import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <div>
              <h3>Snacks:</h3>
              <p>{snacks.length}</p>
            </div>
            <div>
              <h3>Drinks:</h3>
              <p>{drinks.length}</p>
            </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
