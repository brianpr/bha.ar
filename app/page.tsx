import LayoutSidebar from './components/LayoutSidebar';
import BusinessUnits from './components/business-units/BusinessUnits';

export default function Home() {
  return (
    <div>
      <LayoutSidebar>
        <BusinessUnits />
      </LayoutSidebar>
    </div>
  );
}
