const FLUENT_RAW =
  'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets';

function fluent3d(path: string) {
  return `${FLUENT_RAW}/${path}`;
}

export type Emoji3dDef = { src: string; fallback: string };

const CATEGORY_EMOJI_3D: Record<string, Emoji3dDef> = {
  construction: { src: fluent3d('Construction/3D/construction_3d.png'), fallback: '👷' },
  technician: { src: fluent3d('Hammer%20and%20wrench/3D/hammer_and_wrench_3d.png'), fallback: '🛠️' },
  manpower: { src: fluent3d('Broom/3D/broom_3d.png'), fallback: '🧹' },
  beautician: {
    src: fluent3d('Woman%20getting%20massage/Default/3D/woman_getting_massage_3d_default.png'),
    fallback: '💆‍♀️',
  },
  events: { src: fluent3d('Camera%20with%20flash/3D/camera_with_flash_3d.png'), fallback: '📸' },
  rental: { src: fluent3d('Chair/3D/chair_3d.png'), fallback: '🪑' },
  vehicle: { src: fluent3d('Automobile/3D/automobile_3d.png'), fallback: '🚗' },
  accommodation: { src: fluent3d('Hotel/3D/hotel_3d.png'), fallback: '🏨' },
};

const QUICK_ACTION_EMOJI_3D: Record<string, Emoji3dDef> = {
  bookings: { src: fluent3d('Clipboard/3D/clipboard_3d.png'), fallback: '📋' },
  saved: { src: fluent3d('Red%20heart/3D/red_heart_3d.png'), fallback: '❤️' },
  help: { src: fluent3d('Headphone/3D/headphone_3d.png'), fallback: '🎧' },
};

export function getCategoryEmoji3d(id: string): Emoji3dDef {
  return CATEGORY_EMOJI_3D[id] ?? { src: fluent3d('Sparkles/3D/sparkles_3d.png'), fallback: '✨' };
}

export function getQuickActionEmoji3d(id: string): Emoji3dDef {
  return QUICK_ACTION_EMOJI_3D[id] ?? { src: fluent3d('Sparkles/3D/sparkles_3d.png'), fallback: '✨' };
}
