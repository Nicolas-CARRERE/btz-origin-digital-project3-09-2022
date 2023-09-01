/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from "express";
import { Form } from "multiparty";

export function asyncFormParse(
  req: Request
): Promise<{ fields: any; files: any }> {
  return new Promise((resolve, reject) => {
    const form = new Form();
    form.parse(req, async (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
}
