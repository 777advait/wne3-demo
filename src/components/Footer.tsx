import React from "react";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t">
      <Container>
        <h1 className="font-russoOne text-4xl">WNE3</h1>
        <div className="flex items-start justify-between py-8">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">Socials</h2>

            <ul className="pl-2">
              <li>
                <a href="https://www.instagram.com/wne_3">Instagram</a>
              </li>
              <li>
                <a href="https://x.com/WNE_3">X</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/wne3">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2.5 lg:items-end">
            <h3 className="text-sm font-semibold">
              © {new Date().getFullYear()} WNE3 Technologies Pvt. Ltd. | All
              Rights Reserved.
            </h3>
            <p className="text-end text-sm text-muted-foreground">
              Vishakapatnam, Andhra Pradesh, India
            </p>
            <p className="text-end text-sm text-muted-foreground">
              For assistance and inquiries contact:{" "}
              <a href="mailto:technology@wne3.com">technology@wne3.com</a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
