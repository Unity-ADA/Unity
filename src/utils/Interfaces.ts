
export interface links {
  discord?:        string;
  twitter?:        string;
  website?:        string;
  reddit?:         string;
  github?:         string;
  telegram?:       string;
  buy?:            string;
  discord_handle?: string;
}

export interface project_team {
  name: string;
  image?: string;
  links?: links;
}

export interface extra_token_information {
  launchpad?: launchpad;
  highlighted?: boolean;
}

export interface launchpad {
  link?:          string;
  start_time?:    number;
  end_time?:      number;
  to_distribute?: number;
}

export interface curator_information {
  name:         string;
  description?: string;
}

export interface information {
  name:         string;
  ticker:       string;
  description?: string; /** optional for pools */
}

export interface token_information {
  supply:         number;
  decimals:       number;
  fingerprint:    string;
  policy_id:      string;
  policy_id_full: string;
}

export interface pool_information {
  pool_id: string;
  hash?:   string;
  drep?:   string;
}

export interface images {
  logo:        string;
  header?:     string;
  collection?: string[]; /** @TODO test this as part of cnft integration */
}

export interface TokenLikes {
  id: number;
  project_slug: string;
  likers: string[];
}

export interface TokenComment {
  id: number;
  created_at: number;
  comment: string;
  author: string;
  post_id: number;
  signature: string;
  likers: string[];
}

export interface ForumComment {
  id: number;
  created_at: number;
  post: string;
  author: string;
  post_id: number;
  signature: string;
  last_updated: number;
  updated_comment: string;
  likers: string[];
}

export interface ForumPost {
  id: number;
  created_at: number;
  title: string;
  post: string;
  author: string;
  likers: string[];
  signature: string;
  tag: string;

  comment_count?: number;
}

export interface ForumGeneral {
  post?: string;
  comment?: string;
  title?: string;
}