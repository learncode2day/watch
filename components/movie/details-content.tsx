import React, { Suspense } from 'react'

import { MovieCredits, MovieDetails } from '@/types/movie-details'
import { Movie } from '@/types/movie-result'
import { getPosterImageURL } from '@/lib/utils'
import { BlurredImage } from '@/components/blurred-image'
import { List } from '@/components/list'
import { SliderHorizontalListLoader } from '@/components/loaders/slider-horizontal-list-loader'
import { DetailsCredits } from '@/components/movie/details-credits'
import { DetailsExtraInfo } from '@/components/movie/details-extra-info'

export const DetailsPageContent = ({
  movie,
  movieCredits,
  similarMovies,
  recommendedMovies,
}: {
  movie: MovieDetails
  movieCredits: MovieCredits
  similarMovies: Movie[]
  recommendedMovies: Movie[]
}) => {
  const director = movieCredits?.crew?.find((crew) => crew.job === 'Director')
    ?.name
  return (
    <section className="container pb-10 pt-12 lg:pb-20">
      <div className="flex flex-row gap-8">
        <div className="hidden lg:block">
          <div className="relative min-h-[600px] w-[400px]">
            <BlurredImage
              src={getPosterImageURL(movie.poster_path)}
              alt={movie.title}
              className="h-full w-full rounded-lg object-fill shadow-lg lg:object-cover"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              intro
            />
          </div>
        </div>
        <section className="flex flex-col gap-4">
          <DetailsExtraInfo movie={movie} director={director} />
          <DetailsCredits movieCredits={movieCredits} />
        </section>
      </div>
      <Suspense fallback={<SliderHorizontalListLoader />}>
        <List title="Recommended Movies" items={recommendedMovies} />
      </Suspense>
      <Suspense fallback={<SliderHorizontalListLoader />}>
        <List title="Similar Movies" items={similarMovies} />
      </Suspense>
    </section>
  )
}
