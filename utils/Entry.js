import { blue, gray, green, italic, magenta } from 'colorette';
import { readFileSync } from 'node:fs';

const { author, version } = JSON.parse(readFileSync('./package.json'));

export const LogoMain = magenta(`
        ________ _______ _____   ___________
        ___  __ \\___    |___  | / /__  ____/
        __  / / /__  /| |__   |/ / _  / __
        _  /_/ / _  ___ |_  /|  /  / /_/ /
        /_____/  /_/  |_|/_/ |_/   \\\____/
        ${italic(gray(`v${version} - by ${author}`))}
\n`);

/* eslint-disable no-irregular-whitespace */
const Welcome_txt = `            ๐ผโโโโโ ๐ชโโโโโ ๐ฑ โโโโโ๐จโ โโโโ๐ดโโโโโ ๐ฒโโโโโ ๐ช
                ๐นโโโโโ ๐ด
        ๐ฉโโโโโ ๐ฎโโโโโ ๐ธโโโโโ ๐จ โโโโโ๐ดโโโโโ ๐ทโโโโโ ๐ฉโโโโโ  ๐ณโโโโโ ๐ฎโโโโโ ๐น โโโโโ๐ทโโโโโ ๐ด
            ๐ฌโโโโโ ๐ชโโโโโ ๐ณโโโโโ ๐ชโโโโโ ๐ทโโโโโ ๐ฆโโโโโ ๐นโโโโโ ๐ดโ ๐ท
              \n\n`;

const Credit_txt = `Made by ${green(`${author}`)} With โค๏ธ\n\n`;
const Discord = `Need help? ${magenta('Join Our Discord')} \n${blue('https://discord.gg/CNAJfbs5dn\n\n')}`;

export const Welcome = Welcome_txt + Credit_txt + Discord;
