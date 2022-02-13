/* eslint-disable jest/valid-title */
import { render, screen } from "@testing-library/react";
import PageContainer from "./PageContainer";

describe("PageContainer component", () => {
  it("should render the childrens", () => {
    render(
      <PageContainer>
        <h1>test text</h1>
      </PageContainer>
    );
    screen.getByText(/test text/i);
  });
});
