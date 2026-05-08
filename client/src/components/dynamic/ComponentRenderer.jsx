import FormRenderer from "./FormRenderer";
import TableRenderer from "./TableRenderer";
import DashboardRenderer from "./DashboardRenderer";
import UnknownComponent from "./UnknownComponent";

function ComponentRenderer({ component }) {
  switch (component.type) {
    case "form":
      return (
        <FormRenderer
          config={component}
        />
      );

    case "table":
      return (
        <TableRenderer
          config={component}
        />
      );

    case "dashboard":
      return (
        <DashboardRenderer
          config={component}
        />
      );

    default:
      return (
        <UnknownComponent
          type={component.type}
        />
      );
  }
}

export default ComponentRenderer;