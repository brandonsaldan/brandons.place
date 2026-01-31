export type TravelMode = 'air' | 'road' | 'sea';

export type Location = {
  name: string;
  visitedDate?: string;
  notes?: string;
};

export type Journey = {
  from: string;
  to: string;
  mode: TravelMode;
  date?: string;
};

export type TravelData = {
  states: Location[];
  countries: Location[];
  journeys: Journey[];
};

const travelData: TravelData = {
  states: [
    { name: 'Pennsylvania', visitedDate: '2002+' },
    { name: 'Delaware', visitedDate: '2002+' },
    { name: 'New Jersey', visitedDate: '2002+' },
    { name: 'Maryland', visitedDate: '2002+' },
    { name: 'Virginia', visitedDate: '2010+' },
    { name: 'North Carolina', visitedDate: '2010+' },
    { name: 'South Carolina', visitedDate: '2010+' },
    { name: 'Georgia', visitedDate: '2010+' },
    { name: 'Florida', visitedDate: '2010+' },
    { name: 'New York', visitedDate: '2016' },
    { name: 'Washington, DC', visitedDate: '2016' },
    { name: 'Connecticut', visitedDate: '2021' },
    { name: 'Massachusetts', visitedDate: '2021' },
    { name: 'Vermont', visitedDate: '2021' },
    { name: 'New Hampshire', visitedDate: '2021' },
    { name: 'Michigan', visitedDate: '2024' },
    { name: 'Indiana', visitedDate: '2024' },
    { name: 'Texas', visitedDate: '2024' },
    { name: 'Alabama', visitedDate: '2025' },
    { name: 'Mississippi', visitedDate: '2025, 2026' },
    { name: 'Tennessee', visitedDate: '2025, 2026' },
    { name: 'Arkansas', visitedDate: '2026' },
  ],
  countries: [
    { name: 'United States', visitedDate: '2002', notes: 'Home' },
    { name: 'Dominican Republic', visitedDate: '2008, 2026', notes: 'Punta Cana, Amber Cove' },
    { name: 'Canada', visitedDate: '2015, 2016, 2018', notes: 'Toronto, Montreal, Newfoundland' },
    { name: 'Germany', visitedDate: '2019', notes: 'Berlin, Dresden' },
    { name: 'Czechia', visitedDate: '2019', notes: 'Prague' },
    { name: 'Poland', visitedDate: '2019', notes: 'Kraków, Oświęcim' },
    { name: 'Slovakia', visitedDate: '2019', notes: 'Košice' },
    { name: 'Hungary', visitedDate: '2019', notes: 'Budapest' },
    { name: 'The Bahamas', visitedDate: '2023, 2026', notes: 'Nassau, Half Moon Cay' },
    { name: 'Turks and Caicos', visitedDate: '2026', notes: 'Grand Turk' },
  ],
  journeys: [
    { from: 'Philadelphia', to: 'Punta Cana', mode: 'air', date: '07-2008' },
    { from: 'Philadelphia', to: 'Gander', mode: 'air', date: '11-2018' },
    { from: 'St. Johns', to: 'Philadelphia', mode: 'air', date: '11-2018' },
    { from: 'Raleigh', to: 'Newark', mode: 'air', date: '04-2019' },
    { from: 'Newark', to: 'Berlin', mode: 'air', date: '04-2019' },
    { from: 'Budapest', to: 'Washington, DC', mode: 'air', date: '04-2019' },
    { from: 'Washington, DC', to: 'Raleigh', mode: 'air', date: '04-2019' },
    { from: 'Philadelphia', to: 'Raleigh', mode: 'air', date: '03-2022' },
    { from: 'Raleigh', to: 'Trenton', mode: 'air', date: '06-2022' },
    { from: 'Raleigh', to: 'Philadelphia', mode: 'air', date: '09-2022' },
    { from: 'Philadelphia', to: 'Tampa', mode: 'air', date: '09-2022' },
    { from: 'Tampa', to: 'Philadelphia', mode: 'air', date: '09-2022' },
    { from: 'Philadelphia', to: 'Raleigh', mode: 'air', date: '09-2022' },
    { from: 'Philadelphia', to: 'Raleigh', mode: 'air', date: '03-2023' },
    { from: 'Charleston', to: 'Nassau', mode: 'sea', date: '04-2023' },
    { from: 'Nassau', to: 'Half Moon Cay', mode: 'sea', date: '04-2023' },
    { from: 'Half Moon Cay', to: 'Charleston', mode: 'sea', date: '04-2023' },
    { from: 'Raleigh', to: 'New York', mode: 'air', date: '05-2023' },
    { from: 'Raleigh', to: 'Philadelphia', mode: 'air', date: '06-2023' },
    { from: 'Wilmington', to: 'Raleigh', mode: 'air', date: '07-2023' },
    { from: 'Raleigh', to: 'New York', mode: 'air', date: '01-2024' },
    { from: 'New York', to: 'Raleigh', mode: 'air', date: '01-2024' },
    { from: 'Raleigh', to: 'Atlanta', mode: 'air', date: '01-2024' },
    { from: 'Atlanta', to: 'Tampa', mode: 'air', date: '01-2024' },
    { from: 'Tampa', to: 'Philadelphia', mode: 'air', date: '01-2024' },
    { from: 'Philadelphia', to: 'Raleigh', mode: 'air', date: '01-2024' },
    { from: 'Raleigh', to: 'New York', mode: 'air', date: '07-2024' },
    { from: 'New York', to: 'Raleigh', mode: 'air', date: '07-2024' },
    { from: 'Raleigh', to: 'Detroit', mode: 'air', date: '08-2024' },
    { from: 'Detroit', to: 'Indianapolis', mode: 'air', date: '08-2024' },
    { from: 'Indianapolis', to: 'Dallas', mode: 'air', date: '08-2024' },
    { from: 'Dallas', to: 'Raleigh', mode: 'air', date: '08-2024' },
    { from: 'Norfolk', to: 'Half Moon Cay', mode: 'sea', date: '02-2026' },
    { from: 'Half Moon Cay', to: 'Grand Turk', mode: 'sea', date: '02-2026' },
    { from: 'Grand Turk', to: 'Amber Cove', mode: 'sea', date: '02-2026' },
    { from: 'Amber Cove', to: 'Norfolk', mode: 'sea', date: '02-2026' },
  ],
};

export default travelData;
