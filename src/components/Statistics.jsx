import data from '../data.json';
export function Statistic(props) {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        <Stats label={data.label} percentage={data.percentage} />
      </ul>
    </section>
  );
}

function Stats(props) {
  return data.map(item => (
    <li class="item">
      <span class="label">{item.label}</span>
      <span class="percentage">{item.percentage}%</span>
    </li>
  ));
}
