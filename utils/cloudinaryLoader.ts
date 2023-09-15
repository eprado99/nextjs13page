// As an example, we would use the following code snippet in case our image lies under myimages/image.jpg in our Cloudinary account:
// <Image width="..." height="..." src="/myimages/image.jpg" alt="..." />
const normalizeSrc = (src: string) => src[0] === '/' ? src.slice(1) : src

export default function cloudinaryLoader( src : string , width: number, quality: number | undefined, face: boolean | undefined) {
    if(face) {
        const params = ['c_thumb', 'g_face', `w_${width}`, `q_${quality || 'auto'}`]
        return `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${params.join(',')}/${normalizeSrc(src)}`;
    }
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
    return `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${params.join(',')}/${normalizeSrc(src)}`;
}


