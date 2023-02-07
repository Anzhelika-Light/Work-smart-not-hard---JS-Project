import TmdbAPI from '../TMDB_API';
export default function makeHMTLString({ results }) {
  return results
    .map(
      result =>
        `<li class='gallery__item'>
					<figure>
						<a class='gallery__film-link'>
							<img src='${TmdbAPI.BASE_URL}${result.poster_path}' alt='${
          result.title
        }' data-id='${result.id}'>
						</a>
						<figcaption>
							<h3>${result.title}</h3>
							<div>|
								<div>${result.release_date.slice(0, 4)}
								</div>
							</div>
						</figcaption>
					</figure>
				</li>`
    )
    .join('');
}
