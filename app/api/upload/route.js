import fs from "fs";
import { google } from "googleapis";
import { NextResponse } from "next/server";

const apikeys = require("@/apikeys.json");
const SCOPE = ["https://www.googleapis.com/auth/drive"];

// A Function that can provide access to google drive api
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
export async function POST(req, res) {
  try {
    const authClient = await authorize();
    const file = await uploadFile(authClient);

    return NextResponse.json(
      {
        result: file.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        result: "Internal server error",
      },
      { status: 500 }
    );
  }
}

async function uploadFile(authClient) {
  return new Promise((resolve, reject) => {
    const drive = google.drive({ version: "v3", auth: authClient });

    var fileMetaData = {
      name: "mydrivetext.pdf",
      parents: ["1nd7W3vsdpolxWs7ti91wMFa4OMs_1AZT"], // A folder ID to which file will get uploaded
    };

    drive.files.create(
      {
        resource: fileMetaData,
        media: {
          body: fs.createReadStream("./test.pdf"), // files that will get uploaded
          mimeType: 'application/pdf',
        },
        fields: "id",
      },
      function (error, file) {
        if (error) {
          return reject(error);
        }
        resolve(file);
      }
    );
  });
}