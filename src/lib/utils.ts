/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const formatTimeAgo = (timestamp : number | undefined, defaultTime : string | undefined, lang : string) => {
  if (!timestamp) return defaultTime || (lang === 'en' ? 'Just now' : 'Vừa xong');
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return lang === 'en' ? 'Just now' : 'Vừa xong';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return lang === 'en' ? `${minutes} mins ago` : `${minutes} phút trước`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return lang === 'en' ? `${hours} hours ago` : `${hours} giờ trước`;
  const days = Math.floor(hours / 24);
  return lang === 'en' ? `${days} days ago` : `${days} ngày trước`;
};
