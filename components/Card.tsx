import Image from './Image'
import Link from './Link'

const Media = ({ title, imgSrc, videoSrc, className }) => {
  if (videoSrc) {
    return (
      <video
        src={videoSrc}
        width={640}
        height={640}
        className={className}
        controls={true}
        autoPlay={true}
        muted={true}
        loop={false}
        disablePictureInPicture={true}
        playsInline={true}
        poster={imgSrc}
      />
    )
  }
  return (
    <Image alt={title || 'image'} src={imgSrc} width={640} height={640} className={className} />
  )
}

const Card = ({ title, description, imgSrc, videoSrc, href, cta }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        (imgSrc || videoSrc) && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Media
            title={title}
            imgSrc={imgSrc}
            videoSrc={videoSrc}
            className="object-cover object-center"
          />
        </Link>
      ) : (
        <Media title={title} imgSrc={imgSrc} videoSrc="" className="object- object-center" />
      )}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            {cta || 'Learn more'} &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
