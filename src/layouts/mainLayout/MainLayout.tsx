import { Outlet } from "react-router-dom";
import AnnouncementBar from "../../blocks/AnnouncementBar/AnnouncementBar";
import Header from "../../blocks/Header/Header";

export default function MainLayout() {
  return (
    <>
      <AnnouncementBar />
      <Header />

      {/* Header */}

      <Outlet />

      {/* Footer */}
    </>
  );
}
