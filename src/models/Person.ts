export interface Person {
  id: string;
  type: string;
  attributes: {
    first_name: string;
    last_name: string;
    email: string;
    title: unknown | null;
    joined_at: string;
    last_seen_at: string;
    deactivated_at: unknown | null;
    archived_at: unknown | null;
    role_id: number;
    setting_role_id: unknown | null;
    invited_at: unknown | null;
    is_user: boolean;
    user_id: number;
    tag_list: unknown[];
    avatar_url: unknown | null;
    virtual: boolean;
    custom_fields: unknown | null;
    autotracking: boolean;
    created_at: string;
    placeholder: boolean;
    color_id: unknown | null;
    contact: unknown;
    sample_data: boolean;
    time_unlocked: boolean;
    time_unlocked_on: unknown | null;
    time_unlocked_start_date: unknown | null;
    time_unlocked_end_date: unknown | null;
    time_unlocked_period_id: unknown | null;
    time_unlocked_interval: unknown | null;
    last_activity_at: string;
    two_factor_auth: boolean;
  };
  relationships: {
    organization: {
      data: {
        type: string;
        id: string;
      };
    };
    company: {
      data: {
        type: string;
        id: string;
      };
    };
    subsidiary: {
      data: {
        type: string;
        id: string;
      };
    };
    holiday_calendar: {
      data: {
        type: string;
        id: string;
      };
    };
  };
}
