import { getPlaiceholder } from 'plaiceholder';
import path from 'path';

export async function getBlurDataURL(imagePath) {
  try {
    // Convert web path to file system path
    const fileSystemPath = path.join(process.cwd(), 'public', imagePath);
    const { base64 } = await getPlaiceholder(fileSystemPath);
    return base64;
  } catch (error) {
    return null;
  }
}
