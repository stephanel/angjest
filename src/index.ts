// import { exec } from 'child_process'
// exec('npm -v')

function a(id: number, name: string, mail_id?: string): void {
    console.log('ID:', id);
    console.log('Name', name);

    if (mail_id != undefined) console.log('Email Id', mail_id);
}

console.log('Heeelo Ya!');
