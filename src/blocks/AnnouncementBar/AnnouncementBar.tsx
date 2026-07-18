import { useState } from "react";
import { Link } from "react-router-dom";
import { announcements } from "../../config/storefront/announcements";
import { useInterval } from "../../hooks/useInterval";
import { Wrapper, Content, Message, Action } from "./AnnouncementBar.styles";

export default function AnnouncementBar() {
  const [active, setActive] = useState(0);

  useInterval(
    () => {
      setActive((value) => (value + 1) % announcements.length);
    },
    announcements.length > 1 ? 5000 : undefined,
  );

  const announcement = announcements[active];

  return (
    <Wrapper>
      <Content>
        <Message>{announcement.message}</Message>

        {announcement.action && (
          <Action as={Link} to={announcement.action.href}>
            {announcement.action.label}
          </Action>
        )}
      </Content>
    </Wrapper>
  );
}
