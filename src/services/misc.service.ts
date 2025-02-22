import { ENDPOINT_ENUM } from '@/enums/endpoint';
import { ApiClient } from '@/lib/api-client';
import { IFileUploadResponse } from '@/types/misc';

export class MiscServices {
  static async upload(payload: { file: File }): Promise<IFileUploadResponse> {
    const formData = new FormData();
    formData.append('file', payload.file);

    return ApiClient.post(ENDPOINT_ENUM.UPLOAD, formData, {
      'Content-Type': 'multipart/form-data',
    });
  }
}
