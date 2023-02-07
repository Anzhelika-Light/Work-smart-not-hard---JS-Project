import TmdbAPI from '../TMDB_API';
export default function makeHMTLString({ results }) {
  return results
    .map(
      result =>
        `
	<li>
    <img src="${TmdbAPI.IMG_BASE_URL}${
          result.poster_path
        }" alt="The poster of ${
          result.title
        } film" class="trending-films-gallery-image" />
    <div class="gallery-info-wrapper">
    	<h3>${result.title}</h3>
    	<p>${1} | <span>${result.release_date.slice(0, 4)}</span></p>
    </div>
  </li>
	`
    )
    .join('');
}
