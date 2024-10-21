import StudentRegistrationSheet from '@/components/admin-panel/student-registration-sheet';
import { DataTable } from '@/components/tables/data-table';
import Banner from '@/components/ui/banner';
import { Button } from '@/components/ui/button';
import { studentColumns } from '@/data/students/columns';
import OverviewCard from "@/components/common/overview-card"

export default function AdmissionDashboardTab() {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Admissions Dashboard</h2>
        </div>
        <div className="flex items-center space-x-2">
          <StudentRegistrationSheet/>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        <OverviewCard title={'Total Students'}  data={'10'} description={'+10% from last month'}/>
        <OverviewCard title={'Prospects'}  data={'10'} description={'+10% from last month'}/>
        <OverviewCard title={'Applied'}  data={'10'} description={'+10% from last month'}/>
        <OverviewCard title={'Toured'}  data={'10'} description={'+10% from last month'}/>
        <OverviewCard title={'Waitlist'}  data={'10'} description={'+10% from last month'}/>
      </div>
      <DataTable data={[]} columns={studentColumns} />
    </div>
  );
}
