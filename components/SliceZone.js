import React from 'react'
import Comments from "../components/Comments"

const SliceZone = ({ sliceZone }) => (
    <div>
        {sliceZone.map((slice, index) => {
            switch (slice.slice_type) {
                case ('comments'):
                    return <Comments slice={slice} key={`slice-${index}`} />
                case ('quote'):
                    return <Quote slice={slice} key={`slice-${index}`} />
                case ('full_width_image'):
                    return <FullWidthImage slice={slice} key={`slice-${index}`} />
                case ('image_gallery'):
                    return <ImageGallery slice={slice} key={`slice-${index}`} />
                case ('image_highlight'):
                    return <ImageHighlight slice={slice} key={`slice-${index}`} />
                default:
                    return null
            }
        })}
    </div>
)
export default SliceZone