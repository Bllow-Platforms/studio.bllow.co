import { ENDPOINT_ENUM } from '@/enums/endpoint';
import { ApiClient } from '@/lib/api-client';
import { IFileUploadResponse } from '@/types/misc';
import { File } from 'node:buffer';

export class MiscServices {
  async upload(payload: { file: File }) {
    return ApiClient.post(`${ENDPOINT_ENUM.UPLOAD}`, payload);
  }
}
