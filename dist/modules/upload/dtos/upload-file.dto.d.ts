import { UploadFileRequest } from '../interfaces';
export declare class UploadFileDto implements Omit<UploadFileRequest, 'file'> {
    bucket: string;
    file: any;
}
