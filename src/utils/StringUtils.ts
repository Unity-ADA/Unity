import { FORUM_GENERAL } from "@/consts/global";

export function format_unix_time(unixTimestamp: number): string {
  const date = new Date(unixTimestamp * 1000);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}/${formattedMonth}/${year}`;
}

export function format_big_number(value: number): string {
  if (value >= 1_000_000_000_000_000_000) {
      const formattedValue = (value / 1_000_000_000_000_000_000).toFixed(2);
      return `${formattedValue}Q`;
  } else if (value >= 1_000_000_000_000) {
      const formattedValue = (value / 1_000_000_000_000).toFixed(2);
      return `${formattedValue}T`;
  } else if (value >= 1_000_000_000) {
      const formattedValue = (value / 1_000_000_000).toFixed(2);
      return `${formattedValue}B`;
  } else if (value >= 1_000_000) {
      const formattedValue = (value / 1_000_000).toFixed(2);
      return `${formattedValue}M`;
  }
  return value.toString();
}

export function format_atomic(decimals: number, total: number): number | string {
  let returning_value = typeof total === 'string' ? parseFloat(total) : total;

  switch (decimals) {
    case 10: returning_value = total / 1e10; break;
    case 9:  returning_value = total / 1e9;  break;
    case 8:  returning_value = total / 1e8;  break;
    case 7:  returning_value = total / 1e7;  break;
    case 6:  returning_value = total / 1e6;  break;
    case 5:  returning_value = total / 1e5;  break;
    case 4:  returning_value = total / 1e4;  break;
    case 3:  returning_value = total / 1e3;  break;
    case 2:  returning_value = total / 1e2;  break;
    case 1:  returning_value = total / 10;   break;
    case 0:  break;
    default: break;
  }

  return returning_value;
}

export function copy_to_clipboard(text: string) {
  navigator.clipboard.writeText(text);
}

export function forum_check_valid_post(title?: string, post?: string, comment?: string, tag?: string): boolean {
  const fg_string_rules = FORUM_GENERAL.string_rules;
  if (comment) { if (comment.length < fg_string_rules.MIN_CHARS || comment.length > fg_string_rules.MAX_CHARS_COMMENTS) { return false; } }
  if (title && post) {
    if (title.length < fg_string_rules.MIN_CHARS || title.length > fg_string_rules.MAX_CHARS_TITLE || post.length < fg_string_rules.MIN_CHARS || post.length > fg_string_rules.MAX_CHARS_POST) {
      return false;
    }
  }
  if (tag) {
    if (tag.length < fg_string_rules.MIN_CHARS || tag.length > fg_string_rules.MAX_CHARS_TAG) {
      return false;
    }
  }
  return true;
}
