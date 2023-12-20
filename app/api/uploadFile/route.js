import { google } from "googleapis";
import { NextResponse } from "next/server";
import { Readable } from 'stream';

const apikeys = require("@/apikeys.json");
const SCOPE = ["https://www.googleapis.com/auth/drive"];

// A Function that can provide access to google drive API
async function authorize() {
  const jwtClient = new google.auth.JWT(
    apikeys.client_email,
    null,
    apikeys.private_key,
    SCOPE
  );

  await jwtClient.authorize();

  return jwtClient;
}

// A Function that will upload the desired file to google drive folder
async function uploadFile(uploadedFile, authClient, filename) {
  return new Promise((resolve, reject) => {
    const drive = google.drive({ version: "v3", auth: authClient });

    const readableStream = new Readable();
    readableStream.push(uploadedFile);
    readableStream.push(null);

    const fileMetaData = {
      name: filename,
      parents: ["1nd7W3vsdpolxWs7ti91wMFa4OMs_1AZT"], // A folder ID to which the file will get uploaded
    };

    drive.files.create(
      {
        resource: fileMetaData,
        media: {
          body: readableStream, // files that will get uploaded
          mimeType: "application/pdf",
        },
        fields: "id",
      },
      function (error, file) {
        if (error) {
          reject(error);
        } else {
          resolve(file);
        }
      }
    );
  });
}

export async function POST(req, res) {

  try{
  const formData = await req.formData();
  const file = formData.get('file');
  const authClient = await authorize();
  const bufferFile = Buffer.from(await file.arrayBuffer());
  const result = await uploadFile(bufferFile, authClient, file.name);

  return NextResponse.json(
    {
      result: result,
    },
    { status: 200 }
  );
  }catch(error){
    console.log(error);
  }
}